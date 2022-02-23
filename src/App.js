import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./themes";
import { SettingsConsumer, SettingsProvider } from "./context/settings-context";
import Scope from "./pages/scope";
import Agreement from "./pages/agreement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<SettingsProvider>
			<SettingsConsumer>
				{({ settings }) => (
					<ThemeProvider
						theme={createTheme({
							direction: settings.direction,
							responsiveFontSizes: settings.responsiveFontSizes,
							mode: settings.theme,
						})}>
						<Router>
							<Routes>
								<Route exact path='/scope' element={<Scope />} />
								<Route exact path='/agreement' element={<Agreement />} />
							</Routes>
						</Router>
					</ThemeProvider>
				)}
			</SettingsConsumer>
		</SettingsProvider>
	);
}

export default App;
