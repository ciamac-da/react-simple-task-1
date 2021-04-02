https://ciamac-da.github.io/react-simple-task-1/

    EN
         
        0- Create a React App. Make 2 new Folders in src called components and containers, put App.css, Appjs and App.test.js file inside of containers folder.

        1- Create an input field (in App component) with a change listener which outputs the length of the   entered text below it (e.g. in a paragraph). Use Class-Components in App.js 
          
        2- Create a new component (=> Validation Component) in components folder which receives the text length as a prop. For this component please use functional component.
         
        3- Inside the Validation Component, either outpu  "There's no text",  "Text too short"(between 1 and 15) , "Text long enough"(bigger than 15 and less than 25) and "Text too long"(bigger than 25) depending on the text length. 
        
        4- Create another component (=> Char Component) in  components folder and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black, border-radius:10px, background-color: white).Use functional component in this file

        5- Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
         
        6- When you click a CharComponent, it should be removed from the entered text.

        7- Try to make a new Branch and refactor Class-Component to a Functional-Compenent in App.js

        Hint: Keep in mind that JavaScript strings are basically arrays!


         DE 
          0- Baue eine React App. Erstelle  2 neue Ordner in src, die als components und containers bezeichnet werden, und setze  App.css, App.js und App.test.js-Datei im containders-Ordner.

          1- Erstell  ein Eingabefeld (in der App-Komponente) mit einem Änderungslistener, der die Länge des darunter eingegebenen Textes ausgibt (z. B. in einem Absatz). Verwende  Klassenkomponenten in App.js.

          2- Erstell eine neue Komponente (=> ValidationComponent) im Komponentenordner, die die Textlänge als Requisite erhält.

          3- Innerhalb der Validation Komponente gib entweder "Es gibt keinen Text", "Text zu kurz" (zwischen 1 und 15), "Text lang genug" (größer als 15 und kleiner als 25) und "Text zu lang" (größer als 25) aus. abhängig von der Textlänge.

          4- Erstell eine weitere Komponente (=> CharComponent) im Komponentenordner und formatiere sie als inline-box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black, border-radius:10px, background-color: white).Benutze Fnuctional Komponente hier.

          5- Rendern#e eine Liste von CharComponents, wobei jede CharComponent einen anderen Buchstaben des eingegebenen Textes (im anfänglichen Eingabefeld) als Requisite erhält.

          6- Wenn du auf eine CharComponent klickst, sollte diese aus dem eingegebenen Text entfernt werden.

          7- Versuch einen neuen Branch zu bauen, und versuch mal in App.js eine Klassenkomponente zu einer Funktionskomponente umustellen.

          Hinweis: Beachten Sie, dass JavaScript-Zeichenfolgen im Grunde genommen Arrays sind!