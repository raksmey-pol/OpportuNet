import logo from "../assets/logo.png"

function Nav() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 text-xl font-serif border">
        <div className="mb-4 md:mb-0" name="logo">
            <img src={logo} className="h-12" alt="logo"></img>
        </div>
        <div className="mb-4 md:mb-0" name="navbar">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
                <li>Product</li>
                <li>Features</li>
                <li>Marketplace</li>
                <li>Company</li>
            </ul>
        </div>
        <div className="border rounded-xl border-stone-800" name="user">
            <button className="px-4 py-2">User</button>
        </div>
    </div>
  );
}

export default Nav;
