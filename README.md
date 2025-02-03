# Secret Santa Draw

This simple application allows you to manage a list of friends and draw a random Secret Santa for each person. It consists of the following main features:

- **Add Friends**: You can add friends to the list by entering their name.
![image](https://github.com/user-attachments/assets/4129ab01-da16-4b85-91a7-e08a850829d0)

- **Display Friend List**: The list of added friends is dynamically updated.
![image](https://github.com/user-attachments/assets/600bf97a-e98e-4098-8166-740d670f6258)

- **Secret Santa Draw**: The app randomly selects one friend as the Secret Santa.
![image](https://github.com/user-attachments/assets/e9a8bc4f-0e53-4ce4-b667-0ced5a359592)


## Challenge

This project was created as part of a challenge offered by [Alura](https://www.alura.com.br) in the **G8 One Program**. The challenge encourages participants to apply their JavaScript and web development skills to build a functional application with basic interactivity.

## Features

1. **Add Friends**: 
   - Users can input a friend's name and add it to the list.
   - If no name is entered, an alert will prompt the user to enter a name.
   
2. **View Friend List**:
   - After adding a name, the friend’s name will be displayed in the list below the input field.

3. **Draw Secret Santa**:
   - Users can click the "Draw Secret Santa" button to randomly select a friend from the list.
   - If the list is empty, the app will notify the user that no friends are available for the draw.
   - The drawn friend's name will be displayed below the button.


## Code Explanation

### JavaScript Functions

- **addFriend()**:
  - Retrieves the name entered in the input field.
  - Adds the name to the `friends` array if it's not empty.
  - Clears the input field after adding the name.
  - Updates the friend list displayed on the page.

- **updateList()**:
  - Clears the current list and re-renders the updated list of friends.

- **drawSecretSanta()**:
  - Draws a random friend from the `friends` array.
  - Displays the drawn friend’s name on the screen.
  - Alerts the user if there are no friends to draw.

## Technologies Used

- **HTML**
- **JavaScript**
- **CSS** 

