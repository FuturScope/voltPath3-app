import React, { useState } from "react";

const Settings = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [theme, setTheme] = useState("light");
  const [username] = useState("User123");
  const [email] = useState("user@example.com");
  const [selectedOption, setSelectedOption] = useState(""); // State for the dropdown option

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // You can add logic to apply the theme
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update selected option state
  };

  const handleSave = () => {
    // Logic to save the settings (e.g., API call to save user settings)
    console.log("Settings saved:", {
      notificationEnabled,
      theme,
      username,
      email,
      selectedOption, // Include selected option in the saved settings
    });
  };

  return (
    <div className="settings-container p-6 bg-[#1A1C2C] rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      <div className="setting-item mb-4">
        <label htmlFor="options" className="block mb-2">
          Networks:
        </label>
        <select
          id="options"
          value={selectedOption}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="option1">Supercharger</option>
          <option value="option2">Tesla Destination</option>
          <option value="option3">Other & Non-networked</option>
        </select>
        <p className="mt-2">Selected: {selectedOption}</p>
      </div>
      <div className="setting-item mb-4">
        <label htmlFor="options" className="block mb-2">
          Country:
        </label>
        <select
          id="options"
          value={selectedOption}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Current Locations</option>
          <option value="option1">Greater Accra</option>
          <option value="option2">Kumasi</option>
          <option value="option3">Cape Coast</option>
        </select>
        <p className="mt-2">Selected: {selectedOption}</p>
      </div>

      <div className="setting-item mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Notifications
        </label>
        <input
          type="checkbox"
          checked={notificationEnabled}
          onChange={() => setNotificationEnabled(!notificationEnabled)}
        />
        <span className="ml-2">Enable Notifications</span>
      </div>

      <div className="setting-item mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Theme
        </label>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
