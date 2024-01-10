import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Redux Toolkit
import { Provider } from "react-redux";
import store from "./Store";

// Context
import { TodoProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TodoProvider>
          <App />
        </TodoProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
