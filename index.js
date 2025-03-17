// List of 25 correct passwords
const correctPasswords = [
    "AbCdEfGhIj1234567890",
    "qwertyuiop0987654321",
    "ZXCVBNMASD123QWE456",
    "mnbvcxzlkjhgfdsa7890",
    "Tech42Ninja987654321",
    "StackQueueGraphData04",
    "PYTHONjavaJSreactNode",
    "CloudAIBigDataML1234",
    "FlutterDjangoSQLVue07",
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
