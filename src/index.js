import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  ArchivesProvider,
  AuthProvider,
  FilterProvider,
  NoteDetailsProvider,
  NotesProvider,
  ThemeProvider,
} from "./Contexts";
import axios from "axios";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <NotesProvider>
            <ArchivesProvider>
              <FilterProvider>
                <NoteDetailsProvider>
                  <App />
                </NoteDetailsProvider>
              </FilterProvider>
            </ArchivesProvider>
          </NotesProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
