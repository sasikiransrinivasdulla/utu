// List of 25 correct passwords
const correctPasswords = [
    "P5O14O2QE1CV1L15GV61",
    "W1TS42G1W6I2C8S7K4V2",
    "A1P5A1N15ET1Z1Q7J4Y1",
    "V2G2B1S14BM1B2M9J4G2",
    "E33IY11R3JT8V8P7L3L5",
    "3Z5X8P3O1PS5G6S1L5A4",
    "S1V6P7X3D5J1G1Y2R3C2",
    "7D14D13ERDS4M8L1G3A5",
    "F2U3G21M7GC1K4A5B14W",
    "Crypt0Bl0ckchainWeb3XYZ",
    "NeuralDeepTensorFlowAI",
    "CyberHackerDarkWeb404",
    "FullStackMEANMERNdev09",
    "ReactTailwindBootstrap",
    "ServerlessLambdaAWSGCP",
    "CyberS3cur1tyBrut3F0rce",
    "MetaverseVRARQuantum01",
    "IoT5GEdgeComputingTech",
    "H4ckTh3Pl4n3tEl1t3Hax0r",
    "SQLInjectionXSSCSRF909",
    "JavaScriptDOMAPIFetch09",
    "LinuxKernelSysAdmin420",
    "CTFdCaptureTheFlag9999",
    "AIChatbotOpenAIGPTXYZ",
    "NMAPWiresharkPortScan"
];

function checkPassword() {
    const enteredPassword = document.getElementById("password").value.trim();

    // Convert both input and correct passwords to lowercase for case-insensitive comparison
    const normalizedInput = enteredPassword.toLowerCase();
    const normalizedPasswords = correctPasswords.map(pwd => pwd.toLowerCase());

    if (normalizedPasswords.includes(normalizedInput)) {
        document.getElementById("result").innerText = "✅ Correct Password! \n \nProceed To Next Level";
        document.getElementById("result").style.color = "lightgreen";
    } else {
        document.getElementById("result").innerText = "❌ Incorrect Password! Try Again!";
        document.getElementById("result").style.color = "red";
    }
}