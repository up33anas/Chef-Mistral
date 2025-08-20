import chefLogo from "../assets/images/chef-logo.png";

export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt="Chef Logo" />
      <h1>Chef Mistral</h1>
    </header>
  );
}
