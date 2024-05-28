import AppRoutes from "./router";
import { ConfigProvider } from "antd";
import "./app.scss";

function App () {
  return (
    <div className="App">
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        <AppRoutes></AppRoutes>
      </ConfigProvider>
    </div>
  )
}

export default App;