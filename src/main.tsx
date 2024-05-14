import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";


ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
    <MantineProvider>
      
			<Provider store={store}>
				<App />
			</Provider>
    </MantineProvider>
	</React.StrictMode>
);
