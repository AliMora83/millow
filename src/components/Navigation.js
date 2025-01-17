import { ethers } from "ethers";
import logo from "../assets/logo.svg";

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts =
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    const account = ethers.utils.getAddress(
      accounts[0]
    );
    setAccount(account);
  };

  return (
    <nav>
      <div className="nav__brand">
        <img src={logo} alt="Logo" />
        <h1>Web3 REAL ESTATE</h1>
      </div>

      <ul className="nav__links">
        <li>
          <a
            href="https://www.alux.com/"
            target="_blank"
            rel="noreferrer"
          >
            Alux.com
          </a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=18027720076"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>

      {account ? (
        <button
          type="button"
          className="nav__connect"
        >
          {account.slice(0, 6) +
            "..." +
            account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className="nav__connect"
          onClick={connectHandler}
        >
          Connect
        </button>
      )}
    </nav>
  );
};

export default Navigation;
