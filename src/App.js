import "./styles.css";
import { FormattedMessage } from "react-intl";
export default function App() {
  return (
    <div className="App">
      <h1>
        <FormattedMessage id="login" />
      </h1>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
