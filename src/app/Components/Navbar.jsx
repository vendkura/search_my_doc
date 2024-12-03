export default function Navbar() {
    return (
      <nav className="fixed flex items-center justify-between p-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-xl font-bold text-blue-600">MyLogo</div>
        </div>
  
        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
            
          >
            Contact Us
          </button>
          <button
            className="px-4 py-2 text-white transition bg-green-500 rounded-md hover:bg-green-600"
           
          >
            Give Your Feedback
          </button>
        </div>
      </nav>
    );
  }
  