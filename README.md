# MarastShock
Do you lack motivation to do the endless MARAST quizzes thrown at you by KAM and KTI? Is MA2 just not painful enough? Do you find yourself trying to bruteforce your way to a finished quiz?
Fear not, for I have a solution! Introducing **MarastShock**, a MARAST/PiShock integration script. Every time you answer incorrectly, you get shocked!

# Install guide
## 1. Download your favourite Greasemonkey compatible UserAgent extension
  If you do not have one, use [Violentmonkey](https://violentmonkey.github.io/), available for all the relevant web browsers and Microsoft Edge.
## 2. Install the MarastShock script
  In general, you'll need to install MarastShock from this URL: `https://raw.githubusercontent.com/NullExceptionTSB/marastshock/refs/heads/master/marastshock.js?token=GHSAT0AAAAAAC7BTJMQJBPXONNCMX5YT4SYZ5XNWVQ`
  For Violentmonkey, open the extension settings, click on the "Plus" icon and select "Install from URL". Then paste the above URL into the dialogue box and install the script.
  
  ![Violentmonkey install instructions](https://github.com/NullExceptionTSB/marastshock/blob/master/media/man1.png?raw=true)
## 3. Configure the script
  Configuration is handled using the GreaseMonkey value store. The currently supported (and nescessary) key-value pairs are as follows:
  - `"apikey": string`
    - Contains your PiShock API key, see [PiShock API docs](https://apidocs.pishock.com/#header-disclaimer)
  - `"username": string`
    - Contains your PiShock username, see [PiShock API docs](https://apidocs.pishock.com/#header-disclaimer)
  - `"sharecode": string`
    - Contains your PiShock sharecode, see [PiShock API docs](https://apidocs.pishock.com/#header-disclaimer)
  - `"intensity": number`
    - Sets the shock intensity on incorrect answer. Range 1-100.
  - `"duration": number`
    - Sets the shock duration in seconds. Range 1-15

# Something doesn't work!
  MarastShock logs everything into the JavaScript console. You can use these error messages for debugging. If that fails, make a GitHub Issue and specify your error code.

# Disclaimer
  Please follow [PiShock's safety guide](https://pishock.com/). I am not responsible for any injury caused by this script.
