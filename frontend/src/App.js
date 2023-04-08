import { useEffect, useState } from "react";
import { ethers } from "ethers";
import DecentraDrive from "./artifacts/contracts/DecentraDrive.sol/DecentraDrive.json";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [accounts, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const wallet = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setAccount(address);

        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contract = new ethers.Contract(
          contractAddress,
          DecentraDrive.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(signer);
      } else {
        alert("Metamask is not installed");
      }
    };
    provider && wallet();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>DecentraDrive</h1>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>

      <p style={{ color: "white" }}>Account : "Not Connected"</p>
      <FileUpload accounts={accounts} contract={contract}></FileUpload>
      <Display accounts={accounts} contract={contract}></Display>
    </div>
  );
}

export default App;
