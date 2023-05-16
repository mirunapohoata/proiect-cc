# Introducere

  Scopul principal al aplicației de față este gestionarea în mod virtual a clasicelor sticky notes pe care cu siguranță fiecare dintre noi le folosește în viața de zi cu zi. Astfel, utilizatorul poate să creeze și să își lase pe „perete” note către sine însuși, pe care mai apoi le poate șterge. Aplicația este formată din trei pagini, prima de unde pot fi vizualizate și șterse notițele, pagina de creare notițe, și cea în care am integrat utilizând API-ul de la OpenAi, bine-cunoscutul chatbot ChatGPT.
  
Link video prezentare: https://youtu.be/IwhcRQXVq0U 
Link aplicație Vercel: https://proiect-cc.vercel.app/ 

# Descrierea tehnologiilor cloud folosite

## _MongoDB_

  MongoDB Atlas este un foarte popular sistem de gestionare a bazelor de date în cloud, care permite gestionarea acestora fără a avea nevoie să deținem sau să configurăm infrastructura fizică. Sistemul se ocupă în cea mai mare măsură de implementarea, gestionarea și rezolvarea eventualelor probleme ce pot să apară în ceea ce privește instanța noastră din cadrul furnizorului de servicii cloud ales (de exemplu AWS, Azure etc.).  
MongoDB Atlas oferă o securitate ridicată a datelor, asigurată prin diverse mijloace și metode, precum autorizare, autentificare sau criptare. Mai mult, utilizatorii au posibilitatea de a-și crea propriile reguli de acces. Tot ca măsură de securitate, instanțele de baze de date nou create nu au implicit acces la rețea. Astfel, utilizatorul trebuie să permită accesul de pe mai multe adrese IP.
Interfața pentru gestionarea bazei de date este ușor de utilizat și intuitivă, ceea ce facilitează lucrul cu baza de date. Mai mult, nu este necesar ca utilizatorul să instaleze și să configureze manual un server MongoDB, iar backup-ul, actualizările software sau restaurările se fac în mod automat. Este de asemenea facilitat și procesul de migrare a bazelor de date din cloud.

 
## _Vercel_

  Vercel este o platformă care le permite dezvoltatorilor să își lanseze și să ruleze online aplicațiile. Platforma este apreciată mai ales pentru ușurința de utilizare și de dezvoltare a aplicațiilor. Sunt puse la dispoziție în special funcționalități concentrate asupra dezvoltării părții de front-end a aplicațiilor, oferind de asemenea o gamă largă de funcționalități care facilitează construirea, testarea și implementarea proiectelor web. În plus față de opțiunile puse la dispoziție pentru partea de front-end, platforma oferă și servicii specifice cloud, de stocare și baze de date.
Este apreciată rapiditatea cu care dezvoltatorii pot să facă deploy și să își actualizeze proiectele online. De asemenea, publicarea aplicației prin Vercel aduce și o serie de beneficii, precum previews sau date analitice. Pentru realizarea proiectului de față, actualizarea aplicației pe Vercel s-a făcut rapid și automat, după legarea conturilor de GitHub și Vercel.
Vercel realizează în mod automat scalarea aplicațiilor, ceea ce înseamnă că acestea nu sunt afectate de volumul mare de date sau numărul de utilizatori care le accesează. 

# Capturi de ecran din aplicație

 • Prima pagină a aplicației este cea de pe care utilizatorul poate să vizualizeze și să gestioneze notițele personale. Fiecare notiță are în partea de jos butonul de erase, de pe care se realizează ștergerea. Navigarea către celelalte pagini se realizează prin meniul din stânga ecranului.

![image](https://github.com/mirunapohoata/proiect-cc/assets/91715501/6c4947fd-4855-4b6d-907c-200d62f6e9d6)

•	Pagina de inserare, este cea care îi permite utilizatorului să creeze noi notițe. Datele se introduc în formular și sunt adăugate în baza de date, și automat pe prima pagină, prin intermediul butonului de submit.

![image](https://github.com/mirunapohoata/proiect-cc/assets/91715501/7ec0ab10-513b-4c42-a449-a6332ec32610)

•	Cea de-a treia pagină este cea care conține chatbot-ul ChatGPT, cu care utilizatorul poate interacționa. Această funcționalitate a fost realizată utilizând modelul din cadrul seminarului, cu anumite customizări.

![image](https://github.com/mirunapohoata/proiect-cc/assets/91715501/ebd1093d-eb84-41dc-a6a9-0956074cfd03)

### Referințe
Documentație seminar
https://www.mongodb.com/basics/mongodb-atlas-tutorial
https://vercel.com/blog/what-is-vercel


