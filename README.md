/**
 * addPrefixToSheets
 * 
 * This script is designed to add a specified prefix to the names of all sheets within the active Google Spreadsheet.
 * The script prompts the user to enter a prefix and then appends this prefix to the beginning of each sheet name.
 * If a sheet name starts with "Copy of" or "Kopia av", these phrases will be removed before the prefix is added.
 * 
 * 
 * Detailed Steps:
 * 1. The script prompts the user to enter a desired prefix.
 * 2. If the user confirms by clicking "OK", the script retrieves the entered prefix.
 * 3. The script then fetches the active spreadsheet and all sheets within it.
 * 4. The script iterates over each sheet, checks if the name starts with "Copy of" or "Kopia av", and removes these phrases if present.
 * 5. The prefix is then added to the beginning of each sheet name.
 * 6. The modified sheet names are updated within the spreadsheet.
 * 7. A confirmation message is displayed to inform the user that the prefix has been added to all sheets.
 * 8. If the user cancels the operation, an alert informs the user that the operation was cancelled.
 * 
 *
 * 
 * Written by Jonas Lund, 2024.
 */
