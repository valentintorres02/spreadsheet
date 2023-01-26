import Spreadsheet from "./components/Spreadsheet";
import { SpreadsheetProvider } from "./context/Spreadsheet.context";

function App() {
  return (
    <SpreadsheetProvider>
      <Spreadsheet />
    </SpreadsheetProvider>
  );
}

export default App;
