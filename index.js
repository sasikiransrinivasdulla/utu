// Mapping of correct passwords to their corresponding sets
const passwordSets = {
    "1H2I7Z1V9WT6U8F2U3V5": "2-38",
    "1Z2XHJ13A4L7N1B3G2E6": "9-20",
    "3Z5X8P3O1PS5G6S1L5A4": "21-37",
    "7D14D13ERDS4M8L1G3A5": "14-35",
    "A1P5A1N15ET1Z1Q7J4Y1": "25-48",
    "CU1P33UX79A3I1G2N2S3": "8-45",
    "E2E3N1N34NJ1C2C6T4G1": "28-44",
    "E33IY11R3JT8V8P7L3L5": "10-40",
    "EAF2W3M1N6P2M1W3911W": "18-19",
    "F2U3G21M7GC1K4A5B14W": "3-30",
    "I2F3S2S3J6W8E8E7L3M5": "32-39",
    "I5F2I6U13YQ3X6W2M3M6": "24-34",
    "J371OGHA18B7TD13EQR6": "15-16",
    "L74AE114QHR2A3A14P4A": "4-22",
    "M93K231E1VX5D2W8E3J2": "12-46",
    "N3VW167EN1E1Z4M9X2Z4": "11-31",
    "O3O1V8O2U9C1G1H2Y5U3": "36-47",
    "P5O14O2QE1CV1L15GV61": "6-7",
    "P6K4F6J1F5H5O4Q9U2E2": "29-41",
    "S1V6P7X3D5J1G1Y2R3C2": "33-49",
    "T312OE8531C3T3H1Y11V": "1-27",
    "T9D3H4AW3AO2G8H3RC6T": "13-17",
    "V2G2B1S14BM1B2M9J4G2": "26-42",
    "V3C3N1F83AM1J6H1Q5P6": "23-43",
    "W1TS42G1W6I2C8S7K4V2": "5-50"
};

function checkPassword() {
    const enteredPassword = document.getElementById("password").value.trim();

    // Convert input to uppercase to match stored passwords (case insensitive)
    const normalizedInput = enteredPassword.toUpperCase();

    if (passwordSets.hasOwnProperty(normalizedInput)) {
        const setNumbers = passwordSets[normalizedInput];
        document.getElementById("result").innerHTML = `
            ✅ <b>Correct Password!</b> <br><br>
            <span style="font-size: 35px; font-weight: bold; color: lightgreen;">Pair - (${setNumbers})</span> <br><br>
            <span style="font-size: 28px; font-weight: bold; color: orange;">Proceed To Next Level</span>
        `;
    } else {
        document.getElementById("result").innerHTML = `<span style="font-size: 20px;">❌ Incorrect Password! Try Again!</span>`;
    }
    
}
