export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://i.thriftbooks.com/api/imagehandler/m/76C5B5CBDDAF895346F63FCF0D000902EF5B433A.jpeg";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Dragons_of_Eden.jpg/220px-Dragons_of_Eden.jpg";
   let book3 = "https://miro.medium.com/v2/resize:fit:636/format:webp/1*zgKWAmxnBJa0SZxJ9QmAHw.jpeg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Art of War" />
         <img src={book2} alt="Dragons of Eden" />
         <img src={book3} alt="Journey into Darkness" />
      </div>      
   );
}