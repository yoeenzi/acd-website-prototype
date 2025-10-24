import React, { useState, useEffect } from 'react';
import { X, Paperclip, Briefcase, User, Mail, Phone, MapPin } from 'lucide-react';
import styles from './JobApplicationModal.module.css';

const JobApplicationModal = ({ isOpen, onClose, jobPosition }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    province: '',
    coverLetter: '',
    additionalInfo: ''
  });

  // Philippine Provinces and their corresponding cities/municipalities
  const provincesCitiesMap = {
    'Metro Manila': [
      'Caloocan', 'Las Piñas', 'Makati', 'Malabon', 'Mandaluyong', 'Manila', 'Marikina',
      'Muntinlupa', 'Navotas', 'Parañaque', 'Pasay', 'Pasig', 'Quezon City', 'San Juan',
      'Taguig', 'Valenzuela', 'Pateros'
    ],
    'Abra': [
      'Bangued', 'Boliney', 'Bucay', 'Bucloc', 'Daguioman', 'Danglas', 'Dolores', 'La Paz',
      'Lacub', 'Lagangilang', 'Lagayan', 'Langiden', 'Licuan-Baay', 'Luba', 'Malibcong',
      'Manabo', 'Peñarrubia', 'Pidigan', 'Pilar', 'Sallapadan', 'San Isidro', 'San Juan',
      'San Quintin', 'Tayum', 'Tineg', 'Tubo', 'Villaviciosa'
    ],
    'Agusan del Norte': [
      'Butuan City', 'Cabadbaran', 'Buenavista', 'Carmen', 'Jabonga', 'Kitcharao', 'Las Nieves',
      'Magallanes', 'Nasipit', 'Remedios T. Romualdez', 'Santiago', 'Tubay'
    ],
    'Agusan del Sur': [
      'Bayugan', 'Bunawan', 'Esperanza', 'La Paz', 'Loreto', 'Prosperidad', 'Rosario',
      'San Francisco', 'San Luis', 'Santa Josefa', 'Sibagat', 'Talacogon', 'Trento', 'Veruela'
    ],
    'Aklan': [
      'Altavas', 'Balete', 'Banga', 'Batan', 'Buruanga', 'Ibajay', 'Kalibo', 'Lezo',
      'Libacao', 'Madalag', 'Makato', 'Malay', 'Malinao', 'Nabas', 'New Washington', 'Numancia',
      'Tangalan'
    ],
    'Albay': [
      'Legazpi City', 'Ligao City', 'Tabaco City', 'Bacacay', 'Camalig', 'Daraga', 'Guinobatan',
      'Jovellar', 'Libon', 'Malilipot', 'Malinao', 'Manito', 'Oas', 'Pio Duran', 'Polangui',
      'Rapu-Rapu', 'Santo Domingo', 'Tiwi'
    ],
    'Antique': [
      'San Jose de Buenavista', 'Anini-y', 'Barbaza', 'Belison', 'Bugasong', 'Caluya', 'Culasi',
      'Hamtic', 'Laua-an', 'Libertad', 'Pandan', 'Patnongon', 'San Remigio', 'Sebaste', 'Sibalom',
      'Tibiao', 'Tobias Fornier', 'Valderrama'
    ],
    'Apayao': [
      'Calanasan', 'Conner', 'Flora', 'Kabugao', 'Luna', 'Pudtol', 'Santa Marcela'
    ],
    'Aurora': [
      'Baler', 'Casiguran', 'Dilasag', 'Dinalungan', 'Dingalan', 'Dipaculao', 'Maria Aurora',
      'San Luis'
    ],
    'Basilan': [
      'Isabela City', 'Lamitan City', 'Akbar', 'Al-Barka', 'Hadji Mohammad Ajul', 'Hadji Muhtamad',
      'Lantawan', 'Maluso', 'Sumisip', 'Tabuan-Lasa', 'Tipo-Tipo', 'Tuburan', 'Ungkaya Pukan'
    ],
    'Bataan': [
      'Balanga City', 'Abucay', 'Bagac', 'Dinalupihan', 'Hermosa', 'Limay', 'Mariveles', 'Morong',
      'Orani', 'Orion', 'Pilar', 'Samal'
    ],
    'Batanes': [
      'Basco', 'Itbayat', 'Ivana', 'Mahatao', 'Sabtang', 'Uyugan'
    ],
    'Batangas': [
      'Batangas City', 'Lipa City', 'Tanauan City', 'Agoncillo', 'Alitagtag', 'Balayan', 'Balete',
      'Bauan', 'Calaca', 'Calatagan', 'Cuenca', 'Ibaan', 'Laurel', 'Lemery', 'Lian', 'Lobo',
      'Mabini', 'Malvar', 'Mataasnakahoy', 'Nasugbu', 'Padre Garcia', 'Rosario', 'San Jose',
      'San Juan', 'San Luis', 'San Nicolas', 'San Pascual', 'Santa Teresita', 'Santo Tomas',
      'Taal', 'Talisay', 'Taysan', 'Tingloy', 'Tuy'
    ],
    'Benguet': [
      'Baguio City', 'Atok', 'Bakun', 'Bokod', 'Buguias', 'Itogon', 'Kabayan', 'Kapangan',
      'Kibungan', 'La Trinidad', 'Mankayan', 'Sablan', 'Tuba', 'Tublay'
    ],
    'Biliran': [
      'Naval', 'Almeria', 'Biliran', 'Cabucgayan', 'Caibiran', 'Culaba', 'Kawayan', 'Maripipi'
    ],
    'Bohol': [
      'Tagbilaran City', 'Alburquerque', 'Alicia', 'Anda', 'Antequera', 'Baclayon', 'Balilihan',
      'Batuan', 'Bien Unido', 'Bilar', 'Buenavista', 'Calape', 'Candijay', 'Carmen', 'Catigbian',
      'Clarin', 'Corella', 'Cortes', 'Dagohoy', 'Danao', 'Dauis', 'Dimiao', 'Duero', 'Garcia Hernandez',
      'Getafe', 'Guindulman', 'Inabanga', 'Jagna', 'Lila', 'Loay', 'Loboc', 'Loon', 'Mabini',
      'Maribojoc', 'Panglao', 'Pilar', 'President Carlos P. Garcia', 'Sagbayan', 'San Isidro',
      'San Miguel', 'Sevilla', 'Sierra Bullones', 'Sikatuna', 'Talibon', 'Trinidad', 'Tubigon',
      'Ubay', 'Valencia'
    ],
    'Bukidnon': [
      'Malaybalay City', 'Valencia City', 'Baungon', 'Cabanglasan', 'Damulog', 'Dangcagan',
      'Don Carlos', 'Impasugong', 'Kadingilan', 'Kalilangan', 'Kibawe', 'Kitaotao', 'Lantapan',
      'Libona', 'Malitbog', 'Manolo Fortich', 'Maramag', 'Pangantucan', 'Quezon', 'San Fernando',
      'Sumilao', 'Talakag'
    ],
    'Bulacan': [
      'Malolos City', 'Meycauayan City', 'San Jose del Monte City', 'Angat', 'Balagtas', 'Baliuag',
      'Bocaue', 'Bulakan', 'Bustos', 'Calumpit', 'Doña Remedios Trinidad', 'Guiguinto', 'Hagonoy',
      'Marilao', 'Norzagaray', 'Obando', 'Pandi', 'Paombong', 'Plaridel', 'Pulilan', 'San Ildefonso',
      'San Miguel', 'San Rafael', 'Santa Maria'
    ],
    'Cagayan': [
      'Tuguegarao City', 'Abulug', 'Alcala', 'Allacapan', 'Amulung', 'Aparri', 'Baggao', 'Ballesteros',
      'Buguey', 'Calayan', 'Camalaniugan', 'Claveria', 'Enrile', 'Gattaran', 'Gonzaga', 'Iguig',
      'Lal-lo', 'Lasam', 'Pamplona', 'Peñablanca', 'Piat', 'Rizal', 'Sanchez-Mira', 'Santa Ana',
      'Santa Praxedes', 'Santa Teresita', 'Santo Niño', 'Solana', 'Tuao'
    ],
    'Camarines Norte': [
      'Daet', 'Basud', 'Capalonga', 'Jose Panganiban', 'Labo', 'Mercedes', 'Paracale', 'San Lorenzo Ruiz',
      'San Vicente', 'Santa Elena', 'Talisay', 'Vinzons'
    ],
    'Camarines Sur': [
      'Iriga City', 'Naga City', 'Baao', 'Balatan', 'Bato', 'Bombon', 'Buhi', 'Bula', 'Cabusao',
      'Calabanga', 'Camaligan', 'Canaman', 'Caramoan', 'Del Gallego', 'Gainza', 'Garchitorena',
      'Goa', 'Lagonoy', 'Libmanan', 'Lupi', 'Magarao', 'Milaor', 'Minalabac', 'Nabua', 'Ocampo',
      'Pamplona', 'Pasacao', 'Pili', 'Presentacion', 'Ragay', 'Sagñay', 'San Fernando', 'San Jose',
      'Sipocot', 'Siruma', 'Tigaon', 'Tinambac'
    ],
    'Camiguin': [
      'Mambajao', 'Catarman', 'Guinsiliban', 'Mahinog', 'Sagay'
    ],
    'Capiz': [
      'Roxas City', 'Cuartero', 'Dao', 'Dumalag', 'Dumarao', 'Ivisan', 'Jamindan', 'Maayon',
      'Mambusao', 'Panay', 'Panitan', 'Pilar', 'Pontevedra', 'President Roxas', 'Sapian', 'Sigma',
      'Tapaz'
    ],
    'Catanduanes': [
      'Virac', 'Bagamanoc', 'Baras', 'Bato', 'Caramoran', 'Gigmoto', 'Pandan', 'Panganiban',
      'San Andres', 'San Miguel', 'Viga'
    ],
    'Cavite': [
      'Cavite City', 'Bacoor City', 'Dasmariñas City', 'General Trias City', 'Imus City', 'Tagaytay City',
      'Trece Martires City', 'Alfonso', 'Amadeo', 'Carmona', 'Gen. Emilio Aguinaldo', 'Gen. Mariano Alvarez',
      'Indang', 'Kawit', 'Magallanes', 'Maragondon', 'Mendez', 'Naic', 'Noveleta', 'Rosario',
      'Silang', 'Tanza', 'Ternate'
    ],
    'Cebu': [
      'Cebu City', 'Carcar City', 'Danao City', 'Lapu-Lapu City', 'Mandaue City', 'Naga City',
      'Talisay City', 'Toledo City', 'Alcantara', 'Alcoy', 'Alegria', 'Aloguinsan', 'Argao',
      'Asturias', 'Badian', 'Balamban', 'Bantayan', 'Barili', 'Bogo City', 'Boljoon', 'Borbon',
      'Carmen', 'Catmon', 'Compostela', 'Consolacion', 'Cordova', 'Daanbantayan', 'Dalaguete',
      'Dumanjug', 'Ginatilan', 'Liloan', 'Madridejos', 'Malabuyoc', 'Medellin', 'Minglanilla',
      'Moalboal', 'Oslob', 'Pilar', 'Pinamungajan', 'Poro', 'Ronda', 'Samboan', 'San Fernando',
      'San Francisco', 'San Remigio', 'Santa Fe', 'Santander', 'Sibonga', 'Sogod', 'Tabogon',
      'Tabuelan', 'Tuburan', 'Tudela'
    ],
    'Cotabato': [
      'Kidapawan City', 'Aleosan', 'Antipas', 'Arakan', 'Banisilan', 'Carmen', 'Kabacan', 'Libungan',
      'M\'lang', 'Magpet', 'Makilala', 'Matalam', 'Midsayap', 'Pigcawayan', 'Pikit', 'President Roxas',
      'Tulunan'
    ],
    'Davao de Oro': [
      'Nabunturan', 'Compostela', 'Laak', 'Mabini', 'Maco', 'Maragusan', 'Mawab', 'Monkayo',
      'Monterey', 'New Bataan', 'Pantukan'
    ],
    'Davao del Norte': [
      'Tagum City', 'Panabo City', 'Samal City', 'Asuncion', 'Braulio E. Dujali', 'Carmen', 'Kapalong',
      'New Corella', 'San Isidro', 'Santo Tomas', 'Talaingod'
    ],
    'Davao del Sur': [
      'Digos City', 'Bansalan', 'Hagonoy', 'Kiblawan', 'Magsaysay', 'Malalag', 'Matanao', 'Padada',
      'Santa Cruz', 'Sulop'
    ],
    'Davao Occidental': [
      'Malita', 'Don Marcelino', 'Jose Abad Santos', 'Santa Maria', 'Sarangani'
    ],
    'Davao Oriental': [
      'Mati City', 'Baganga', 'Banaybanay', 'Boston', 'Caraga', 'Cateel', 'Governor Generoso',
      'Lupon', 'Manay', 'San Isidro', 'Tarragona'
    ],
    'Dinagat Islands': [
      'San Jose', 'Basilisa', 'Cagdianao', 'Dinagat', 'Libjo', 'Loreto', 'Tubajon'
    ],
    'Eastern Samar': [
      'Borongan City', 'Arteche', 'Balangiga', 'Balangkayan', 'Can-avid', 'Dolores', 'General MacArthur',
      'Giporlos', 'Guiuan', 'Hernani', 'Jipapad', 'Lawaan', 'Llorente', 'Maslog', 'Maydolong',
      'Mercedes', 'Oras', 'Quinapondan', 'Salcedo', 'San Julian', 'San Policarpo', 'Sulat', 'Taft'
    ],
    'Guimaras': [
      'Jordan', 'Buenavista', 'Nueva Valencia', 'San Lorenzo', 'Sibunag'
    ],
    'Ifugao': [
      'Lagawe', 'Aguinaldo', 'Alfonso Lista', 'Asipulo', 'Banaue', 'Hingyon', 'Hungduan', 'Kiangan',
      'Lamut', 'Mayoyao', 'Tinoc'
    ],
    'Ilocos Norte': [
      'Laoag City', 'Batac City', 'Adams', 'Bacarra', 'Badoc', 'Bangui', 'Banna', 'Burgos', 'Carasi',
      'Currimao', 'Dingras', 'Dumalneg', 'Marcos', 'Nueva Era', 'Pagudpud', 'Paoay', 'Pasuquin',
      'Piddig', 'Pinili', 'San Nicolas', 'Sarrat', 'Solsona', 'Vintar'
    ],
    'Ilocos Sur': [
      'Vigan City', 'Candon City', 'Alilem', 'Banayoyo', 'Bantay', 'Burgos', 'Cabugao', 'Caoayan',
      'Cervantes', 'Galimuyod', 'Gregorio del Pilar', 'Lidlidda', 'Magsingal', 'Nagbukel', 'Narvacan',
      'Quirino', 'Salcedo', 'San Emilio', 'San Esteban', 'San Ildefonso', 'San Juan', 'San Vicente',
      'Santa', 'Santa Catalina', 'Santa Cruz', 'Santa Lucia', 'Santa Maria', 'Santiago', 'Santo Domingo',
      'Sigay', 'Sinait', 'Sugpon', 'Suyo', 'Tagudin'
    ],
    'Iloilo': [
      'Iloilo City', 'Passi City', 'Ajuy', 'Alimodian', 'Anilao', 'Badiangan', 'Balasan', 'Banate',
      'Barotac Nuevo', 'Barotac Viejo', 'Batad', 'Bingawan', 'Cabatuan', 'Calinog', 'Carles', 'Concepcion',
      'Dingle', 'Dueñas', 'Dumangas', 'Estancia', 'Guimbal', 'Igbaras', 'Janiuay', 'Lambunao', 'Leganes',
      'Lemery', 'Leon', 'Maasin', 'Miagao', 'Mina', 'New Lucena', 'Oton', 'Pavia', 'Pototan', 'San Dionisio',
      'San Enrique', 'San Joaquin', 'San Miguel', 'San Rafael', 'Santa Barbara', 'Sara', 'Tigbauan',
      'Tubungan', 'Zarraga'
    ],
    'Isabela': [
      'Ilagan City', 'Cauayan City', 'Santiago City', 'Alicia', 'Angadanan', 'Aurora', 'Benito Soliven',
      'Burgos', 'Cabagan', 'Cabatuan', 'Cordon', 'Delfin Albano', 'Dinapigue', 'Divilacan', 'Echague',
      'Gamu', 'Jones', 'Luna', 'Maconacon', 'Mallig', 'Naguilian', 'Palanan', 'Quezon', 'Quirino',
      'Ramon', 'Reina Mercedes', 'Roxas', 'San Agustin', 'San Guillermo', 'San Isidro', 'San Manuel',
      'San Mariano', 'San Mateo', 'San Pablo', 'Santa Maria', 'Santo Tomas', 'Tumauini'
    ],
    'Kalinga': [
      'Tabuk City', 'Balbalan', 'Lubuagan', 'Pasil', 'Pinukpuk', 'Rizal', 'Tanudan', 'Tinglayan'
    ],
    'La Union': [
      'San Fernando City', 'Agoo', 'Aringay', 'Bacnotan', 'Bagulin', 'Balaoan', 'Bangar', 'Bauang',
      'Burgos', 'Caba', 'Luna', 'Naguilian', 'Pugo', 'Rosario', 'San Gabriel', 'San Juan', 'Santo Tomas',
      'Santol', 'Sudipen', 'Tubao'
    ],
    'Laguna': [
      'Calamba City', 'San Pablo City', 'Biñan City', 'Santa Rosa City', 'Cabuyao City', 'San Pedro City',
      'Alaminos', 'Bay', 'Calauan', 'Cavinti', 'Famy', 'Kalayaan', 'Liliw', 'Los Baños', 'Luisiana',
      'Lumban', 'Mabitac', 'Magdalena', 'Majayjay', 'Nagcarlan', 'Paete', 'Pagsanjan', 'Pakil', 'Pangil',
      'Pila', 'Rizal', 'Santa Cruz', 'Santa Maria', 'Siniloan', 'Victoria'
    ],
    'Lanao del Norte': [
      'Iligan City', 'Bacolod', 'Baloi', 'Baroy', 'Kapatagan', 'Kauswagan', 'Kolambugan', 'Lala',
      'Linamon', 'Magsaysay', 'Maigo', 'Matungao', 'Munai', 'Nunungan', 'Pantao Ragat', 'Pantar',
      'Poona Piagapo', 'Salvador', 'Sapad', 'Sultan Naga Dimaporo', 'Tagoloan', 'Tangcal', 'Tubod'
    ],
    'Lanao del Sur': [
      'Marawi City', 'Bacolod-Kalawi', 'Balabagan', 'Balindong', 'Bayang', 'Binidayan', 'Buadiposo-Buntong',
      'Bubong', 'Butig', 'Calanogas', 'Ditsaan-Ramain', 'Ganassi', 'Kapai', 'Kapatagan', 'Lumba-Bayabao',
      'Lumbaca-Unayan', 'Lumbatan', 'Lumbayanague', 'Madalum', 'Madamba', 'Maguing', 'Malabang', 'Marantao',
      'Marogong', 'Masiu', 'Mulondo', 'Pagayawan', 'Piagapo', 'Picong', 'Poona Bayabao', 'Pualas',
      'Saguiaran', 'Sultan Dumalondong', 'Tagoloan II', 'Tamparan', 'Taraka', 'Tubaran', 'Tugaya', 'Wao'
    ],
    'Leyte': [
      'Tacloban City', 'Ormoc City', 'Baybay City', 'Abuyog', 'Alangalang', 'Albuera', 'Babatngon',
      'Barugo', 'Bato', 'Burauen', 'Calubian', 'Capoocan', 'Carigara', 'Dagami', 'Dulag', 'Hilongos',
      'Hindang', 'Inopacan', 'Isabel', 'Jaro', 'Javier', 'Julita', 'Kananga', 'La Paz', 'Leyte',
      'MacArthur', 'Mahaplag', 'Matag-ob', 'Matalom', 'Mayorga', 'Merida', 'Palo', 'Palompon',
      'Pastrana', 'San Isidro', 'San Miguel', 'Santa Fe', 'Tabango', 'Tabontabon', 'Tanauan',
      'Tolosa', 'Tunga', 'Villaba'
    ],
    'Maguindanao': [
      'Cotabato City', 'Ampatuan', 'Barira', 'Buldon', 'Buluan', 'Datu Abdullah Sangki', 'Datu Anggal Midtimbang',
      'Datu Blah T. Sinsuat', 'Datu Hoffer Ampatuan', 'Datu Montawal', 'Datu Odin Sinsuat', 'Datu Paglas',
      'Datu Piang', 'Datu Salibo', 'Datu Saudi-Ampatuan', 'Datu Unsay', 'Gen. Salipada K. Pendatun',
      'Guindulungan', 'Kabuntalan', 'Mamasapano', 'Mangudadatu', 'Matanog', 'Northern Kabuntalan',
      'Pagalungan', 'Paglat', 'Pandag', 'Parang', 'Rajah Buayan', 'Shariff Aguak', 'Shariff Saydona Mustapha',
      'South Upi', 'Sultan Kudarat', 'Sultan Mastura', 'Sultan sa Barongis', 'Sultan Sumagka', 'Talayan',
      'Talitay', 'Upi'
    ],
    'Marinduque': [
      'Boac', 'Buenavista', 'Gasan', 'Mogpog', 'Santa Cruz', 'Torrijos'
    ],
    'Masbate': [
      'Masbate City', 'Aroroy', 'Baleno', 'Balud', 'Batuan', 'Cataingan', 'Cawayan', 'Claveria',
      'Dimasalang', 'Esperanza', 'Mandaon', 'Milagros', 'Mobo', 'Monreal', 'Palanas', 'Pio V. Corpuz',
      'Placer', 'San Fernando', 'San Jacinto', 'San Pascual', 'Uson'
    ],
    'Misamis Occidental': [
      'Oroquieta City', 'Ozamiz City', 'Tangub City', 'Aloran', 'Baliangao', 'Bonifacio', 'Calamba',
      'Clarin', 'Concepcion', 'Don Victoriano Chiongbian', 'Jimenez', 'Lopez Jaena', 'Panaon', 'Plaridel',
      'Sapang Dalaga', 'Sinacaban', 'Tudela'
    ],
    'Misamis Oriental': [
      'Cagayan de Oro City', 'Gingoog City', 'Alubijid', 'Balingasag', 'Balingoan', 'Binuangan', 'Claveria',
      'El Salvador', 'Gitagum', 'Initao', 'Jasaan', 'Kinoguitan', 'Lagonglong', 'Laguindingan', 'Libertad',
      'Lugait', 'Magsaysay', 'Manticao', 'Medina', 'Naawan', 'Opol', 'Salay', 'Sugbongcogon', 'Tagoloan',
      'Talisayan', 'Villanueva'
    ],
    'Mountain Province': [
      'Bontoc', 'Barlig', 'Bauko', 'Besao', 'Natonin', 'Paracelis', 'Sabangan', 'Sadanga', 'Sagada',
      'Tadian'
    ],
    'Negros Occidental': [
      'Bacolod City', 'Bago City', 'Cadiz City', 'Escalante City', 'Himamaylan City', 'Kabankalan City',
      'La Carlota City', 'Sagay City', 'San Carlos City', 'Silay City', 'Sipalay City', 'Talisay City',
      'Victorias City', 'Binalbagan', 'Calatrava', 'Candoni', 'Cauayan', 'Enrique B. Magalona', 'Hinigaran',
      'Hinoba-an', 'Ilog', 'Isabela', 'La Castellana', 'Manapla', 'Moises Padilla', 'Murcia', 'Pontevedra',
      'Pulupandan', 'Salvador Benedicto', 'San Enrique', 'Toboso', 'Valladolid'
    ],
    'Negros Oriental': [
      'Dumaguete City', 'Bais City', 'Bayawan City', 'Canlaon City', 'Guihulngan City', 'Tanjay City',
      'Amlan', 'Ayungon', 'Bacong', 'Basay', 'Bindoy', 'Dauin', 'Jimalalud', 'La Libertad', 'Mabinay',
      'Manjuyod', 'Pamplona', 'San Jose', 'Santa Catalina', 'Siaton', 'Sibulan', 'Tayasan', 'Valencia',
      'Vallehermoso', 'Zamboanguita'
    ],
    'Northern Samar': [
      'Allen', 'Biri', 'Bobon', 'Capul', 'Catarman', 'Catubig', 'Gamay', 'Laoang', 'Lapinig', 'Las Navas',
      'Lavezares', 'Lope de Vega', 'Mapanas', 'Mondragon', 'Palapag', 'Pambujan', 'Rosario', 'San Antonio',
      'San Isidro', 'San Jose', 'San Roque', 'San Vicente', 'Silvino Lobos', 'Victoria'
    ],
    'Nueva Ecija': [
      'Cabanatuan City', 'Gapan City', 'Muñoz City', 'Palayan City', 'San Jose City', 'Aliaga', 'Bongabon',
      'Cabiao', 'Carranglan', 'Cuyapo', 'Gabaldon', 'General Mamerto Natividad', 'General Tinio', 'Guimba',
      'Jaen', 'Laur', 'Licab', 'Llanera', 'Lupao', 'Nampicuan', 'Pantabangan', 'Peñaranda', 'Quezon',
      'Rizal', 'San Antonio', 'San Isidro', 'San Leonardo', 'Santa Rosa', 'Santo Domingo', 'Talavera',
      'Talugtug', 'Zaragoza'
    ],
    'Nueva Vizcaya': [
      'Bayombong', 'Alfonso Castaneda', 'Ambaguio', 'Aritao', 'Bagabag', 'Bambang', 'Diadi', 'Dupax del Norte',
      'Dupax del Sur', 'Kasibu', 'Kayapa', 'Quezon', 'Santa Fe', 'Solano', 'Villaverde'
    ],
    'Occidental Mindoro': [
      'San Jose', 'Abra de Ilog', 'Calintaan', 'Looc', 'Lubang', 'Magsaysay', 'Mamburao', 'Paluan',
      'Rizal', 'Sablayan', 'San Jose', 'Santa Cruz'
    ],
    'Oriental Mindoro': [
      'Calapan City', 'Baco', 'Bansud', 'Bongabong', 'Bulalacao', 'Gloria', 'Mansalay', 'Naujan',
      'Pinamalayan', 'Pola', 'Puerto Galera', 'Roxas', 'San Teodoro', 'Socorro', 'Victoria'
    ],
    'Palawan': [
      'Puerto Princesa City', 'Aborlan', 'Agutaya', 'Araceli', 'Balabac', 'Bataraza', 'Brooke\'s Point',
      'Busuanga', 'Cagayancillo', 'Coron', 'Culion', 'Cuyo', 'Dumaran', 'El Nido', 'Kalayaan', 'Linapacan',
      'Magsaysay', 'Narra', 'Quezon', 'Rizal', 'Roxas', 'San Vicente', 'Sofronio Española', 'Taytay'
    ],
    'Pampanga': [
      'Angeles City', 'Mabalacat City', 'San Fernando City', 'Apalit', 'Arayat', 'Bacolor', 'Candaba',
      'Floridablanca', 'Guagua', 'Lubao', 'Macabebe', 'Magalang', 'Masantol', 'Mexico', 'Minalin',
      'Porac', 'San Luis', 'San Simon', 'Santa Ana', 'Santa Rita', 'Santo Tomas', 'Sasmuan'
    ],
    'Pangasinan': [
      'Alaminos City', 'Dagupan City', 'San Carlos City', 'Urdaneta City', 'Agno', 'Aguilar', 'Alcala',
      'Anda', 'Asingan', 'Balungao', 'Bani', 'Basista', 'Bautista', 'Bayambang', 'Binalonan', 'Binmaley',
      'Bolinao', 'Bugallon', 'Burgos', 'Calasiao', 'Dasol', 'Infanta', 'Labrador', 'Laoac', 'Lingayen',
      'Mabini', 'Malasiqui', 'Manaoag', 'Mangaldan', 'Mangatarem', 'Mapandan', 'Natividad', 'Pozorrubio',
      'Rosales', 'San Fabian', 'San Jacinto', 'San Manuel', 'San Nicolas', 'San Quintin', 'Santa Barbara',
      'Santa Maria', 'Santo Tomas', 'Sison', 'Sual', 'Tayug', 'Umingan', 'Urbiztondo', 'Villasis'
    ],
    'Quezon': [
      'Lucena City', 'Tayabas City', 'Agdangan', 'Alabat', 'Atimonan', 'Buenavista', 'Burdeos', 'Calauag',
      'Candelaria', 'Catanauan', 'Dolores', 'General Luna', 'General Nakar', 'Guinayangan', 'Gumaca',
      'Infanta', 'Jomalig', 'Lopez', 'Lucban', 'Macalelon', 'Mauban', 'Mulanay', 'Padre Burgos', 'Pagbilao',
      'Panukulan', 'Patnanungan', 'Perez', 'Pitogo', 'Plaridel', 'Polillo', 'Quezon', 'Real', 'Sampaloc',
      'San Andres', 'San Antonio', 'San Francisco', 'San Narciso', 'Sariaya', 'Tagkawayan', 'Tiaong', 'Unisan'
    ],
    'Quirino': [
      'Cabarroguis', 'Aglipay', 'Diffun', 'Maddela', 'Nagtipunan', 'Saguday'
    ],
    'Rizal': [
      'Antipolo City', 'Angono', 'Baras', 'Binangonan', 'Cainta', 'Cardona', 'Jalajala', 'Morong',
      'Pililla', 'Rodriguez', 'San Mateo', 'Tanay', 'Taytay', 'Teresa'
    ],
    'Romblon': [
      'Alcantara', 'Banton', 'Cajidiocan', 'Calatrava', 'Concepcion', 'Corcuera', 'Ferrol', 'Looc',
      'Magdiwang', 'Odiongan', 'Romblon', 'San Agustin', 'San Andres', 'San Fernando', 'San Jose',
      'Santa Fe', 'Santa Maria'
    ],
    'Samar': [
      'Catbalogan City', 'Calbayog City', 'Almagro', 'Basey', 'Calbiga', 'Daram', 'Gandara', 'Hinabangan',
      'Jiabong', 'Marabut', 'Matuguinao', 'Motiong', 'Pagsanghan', 'Paranas', 'Pinabacdao', 'San Jorge',
      'San Jose de Buan', 'San Sebastian', 'Santa Margarita', 'Santa Rita', 'Santo Niño', 'Tagapul-an',
      'Talalora', 'Tarangnan', 'Villareal', 'Zumarraga'
    ],
    'Sarangani': [
      'Alabel', 'Glan', 'Kiamba', 'Maasim', 'Maitum', 'Malapatan', 'Malungon'
    ],
    'Siquijor': [
      'Siquijor', 'Enrique Villanueva', 'Larena', 'Lazi', 'Maria', 'San Juan'
    ],
    'Sorsogon': [
      'Sorsogon City', 'Barcelona', 'Bulan', 'Bulusan', 'Casiguran', 'Castilla', 'Donsol', 'Gubat',
      'Irosin', 'Juban', 'Magallanes', 'Matnog', 'Pilar', 'Prieto Diaz', 'Santa Magdalena'
    ],
    'South Cotabato': [
      'General Santos City', 'Koronadal City', 'Banga', 'Lake Sebu', 'Norala', 'Polomolok', 'Santo Niño',
      'Surallah', 'T\'Boli', 'Tampakan', 'Tantangan', 'Tupi'
    ],
    'Southern Leyte': [
      'Maasin City', 'Anahawan', 'Bontoc', 'Hinunangan', 'Hinundayan', 'Libagon', 'Liloan', 'Limasawa',
      'Macrohon', 'Malitbog', 'Padre Burgos', 'Pintuyan', 'Saint Bernard', 'San Francisco', 'San Juan',
      'San Ricardo', 'Silago', 'Sogod', 'Tomas Oppus'
    ],
    'Sultan Kudarat': [
      'Tacurong City', 'Bagumbayan', 'Columbio', 'Esperanza', 'Isulan', 'Kalamansig', 'Lambayong',
      'Lebak', 'Lutayan', 'Palimbang', 'President Quirino', 'Senator Ninoy Aquino'
    ],
    'Sulu': [
      'Hadji Panglima Tahil', 'Indanan', 'Jolo', 'Kalingalan Caluang', 'Lugus', 'Luuk', 'Maimbung',
      'Old Panamao', 'Omar', 'Pandami', 'Panglima Estino', 'Pangutaran', 'Parang', 'Pata', 'Patikul',
      'Siasi', 'Talipao', 'Tapul', 'Tongkil'
    ],
    'Surigao del Norte': [
      'Surigao City', 'Alegria', 'Bacuag', 'Basilisa', 'Burgos', 'Cagdianao', 'Claver', 'Dapa', 'Del Carmen',
      'Dinagat', 'General Luna', 'Gigaquit', 'Libjo', 'Loreto', 'Mainit', 'Malimono', 'Pilar', 'Placer',
      'San Benito', 'San Francisco', 'San Isidro', 'Santa Monica', 'Sison', 'Socorro', 'Tagana-an',
      'Tubajon', 'Tubod'
    ],
    'Surigao del Sur': [
      'Tandag City', 'Bislig City', 'Barobo', 'Bayabas', 'Cagwait', 'Cantilan', 'Carmen', 'Carrascal',
      'Cortes', 'Hinatuan', 'Lanuza', 'Lianga', 'Lingig', 'Madrid', 'Marihatag', 'San Agustin',
      'San Miguel', 'Tagbina', 'Tago'
    ],
    'Tarlac': [
      'Tarlac City', 'Anao', 'Bamban', 'Camiling', 'Capas', 'Concepcion', 'Gerona', 'La Paz', 'Mayantoc',
      'Moncada', 'Paniqui', 'Pura', 'Ramos', 'San Clemente', 'San Jose', 'San Manuel', 'Santa Ignacia',
      'Victoria'
    ],
    'Tawi-Tawi': [
      'Bongao', 'Languyan', 'Mapun', 'Panglima Sugala', 'Sapa-Sapa', 'Sibutu', 'Simunul', 'Sitangkai',
      'South Ubian', 'Tandubas', 'Turtle Islands'
    ],
    'Zambales': [
      'Olongapo City', 'Botolan', 'Cabangan', 'Candelaria', 'Castillejos', 'Iba', 'Masinloc', 'Palauig',
      'San Antonio', 'San Felipe', 'San Marcelino', 'San Narciso', 'Santa Cruz', 'Subic'
    ],
    'Zamboanga del Norte': [
      'Dipolog City', 'Dapitan City', 'Baliguian', 'Godod', 'Gutalac', 'Kalawit', 'Katipunan', 'La Libertad',
      'Labason', 'Liloy', 'Manukan', 'Mutia', 'Piñan', 'Polanco', 'President Manuel A. Roxas', 'Rizal',
      'Salug', 'Sergio Osmeña Sr.', 'Siayan', 'Sibuco', 'Sibutad', 'Sindangan', 'Siocon', 'Sirawai',
      'Tampilisan'
    ],
    'Zamboanga del Sur': [
      'Pagadian City', 'Zamboanga City', 'Aurora', 'Bayog', 'Dimataling', 'Dinas', 'Dumalinao', 'Dumingag',
      'Guipos', 'Josefina', 'Kumalarang', 'Labangan', 'Lakewood', 'Lapuyan', 'Mahayag', 'Margosatubig',
      'Midsalip', 'Molave', 'Pitogo', 'Ramon Magsaysay', 'San Miguel', 'San Pablo', 'Sominot', 'Tabina',
      'Tambulig', 'Tigbao', 'Tukuran', 'Vincenzo A. Sagun'
    ],
    'Zamboanga Sibugay': [
      'Alicia', 'Buug', 'Diplahan', 'Imelda', 'Ipil', 'Kabasalan', 'Mabuhay', 'Malangas', 'Naga',
      'Olutanga', 'Payao', 'Roseller Lim', 'Siay', 'Talusan', 'Titay', 'Tungawan'
    ]
  };

  // Get list of provinces
  const provinces = Object.keys(provincesCitiesMap).sort();

  // Get filtered cities based on selected province
  const getFilteredCities = () => {
    if (!formData.province) {
      return [];
    }
    return provincesCitiesMap[formData.province] || [];
  };

  const filteredCities = getFilteredCities();
  
  const [attachedResume, setAttachedResume] = useState(null);
  const [attachedDocuments, setAttachedDocuments] = useState([]);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        province: '',
        coverLetter: '',
        additionalInfo: ''
      });
      setAttachedResume(null);
      setAttachedDocuments([]);
      setFileError('');
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // If province changes, reset city selection
    if (name === 'province') {
      setFormData({
        ...formData,
        province: value,
        city: '' // Reset city when province changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle resume upload
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setFileError('');
    
    if (!file) return;
    
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (file.size > maxSize) {
      setFileError('Resume file is too large. Maximum size is 10MB.');
      e.target.value = '';
      return;
    }
    
    if (!allowedTypes.includes(file.type)) {
      setFileError('Please upload PDF or DOC/DOCX files only for resume.');
      e.target.value = '';
      return;
    }
    
    setAttachedResume(file);
    e.target.value = '';
  };

  // Handle additional documents upload
  const handleDocumentsChange = (e) => {
    const files = Array.from(e.target.files);
    setFileError('');
    
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/jpg'
    ];
    
    const validFiles = [];
    
    for (let file of files) {
      if (file.size > maxSize) {
        setFileError(`${file.name} is too large. Maximum size is 10MB.`);
        continue;
      }
      
      if (!allowedTypes.includes(file.type)) {
        setFileError(`${file.name} is not a supported file type.`);
        continue;
      }
      
      validFiles.push(file);
    }
    
    setAttachedDocuments(prev => [...prev, ...validFiles]);
    e.target.value = '';
  };

  const handleRemoveResume = () => {
    setAttachedResume(null);
    setFileError('');
  };

  const handleRemoveDocument = (index) => {
    setAttachedDocuments(prev => prev.filter((_, i) => i !== index));
    setFileError('');
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate resume is attached
    if (!attachedResume) {
      setFileError('Please attach your resume to continue.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Create FormData object
    const submitData = new FormData();
    submitData.append('firstName', formData.firstName);
    submitData.append('lastName', formData.lastName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('city', formData.city);
    submitData.append('province', formData.province);
    submitData.append('coverLetter', formData.coverLetter);
    submitData.append('additionalInfo', formData.additionalInfo);
    submitData.append('jobTitle', jobPosition?.title || '');
    submitData.append('jobLocation', jobPosition?.location || '');
    submitData.append('resume', attachedResume);
    
    // Append additional documents
    attachedDocuments.forEach((doc, index) => {
      submitData.append(`document_${index}`, doc);
    });
    
    // Simulate API call
    setTimeout(() => {
      console.log('Application submitted:', {
        ...formData,
        jobPosition: jobPosition?.title,
        resume: attachedResume?.name,
        additionalDocuments: attachedDocuments.map(d => d.name)
      });
      
      alert(`Thank you for applying to the ${jobPosition?.title} position! We will review your application and get back to you soon.`);
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={styles.closeBtn}
          aria-label="Close modal"
          disabled={isSubmitting}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <span className={styles.jobBadge}>
            <Briefcase size={14} />
            {jobPosition?.type || 'Full-Time'}
          </span>
          <h2 className={styles.modalTitle}>Apply for Position</h2>
          <div className={styles.jobInfo}>
            <h3 className={styles.jobTitle}>{jobPosition?.title || 'Position'}</h3>
            <p className={styles.jobLocation}>
              <MapPin size={16} />
              {jobPosition?.location || 'Location'}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          <p className={styles.introText}>
            We're excited that you're interested in joining the ACD Corporation team! 
            Please fill out the form below and attach your resume to complete your application.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Personal Information Section */}
            <div className={styles.formSection}>
              <h4 className={styles.sectionHeading}>
                <User size={18} />
                Personal Information
              </h4>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.label}>
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className={styles.formSection}>
              <h4 className={styles.sectionHeading}>
                <Phone size={18} />
                Contact Information
              </h4>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="09XX XXX XXXX"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Location Selection - Province first, then City */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="province" className={styles.label}>
                    Province <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="province"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className={styles.select}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select Province First</option>
                    {provinces.map((province, index) => (
                      <option key={index} value={province}>{province}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.label}>
                    City/Municipality <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={styles.select}
                    required
                    disabled={!formData.province || isSubmitting}
                  >
                    <option value="">
                      {!formData.province ? 'Select Province First' : 'Select City/Municipality'}
                    </option>
                    {filteredCities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Resume Upload Section */}
            <div className={styles.formSection}>
              <h4 className={styles.sectionHeading}>
                <Paperclip size={18} />
                Resume <span className={styles.required}>*</span>
              </h4>
              
              <div className={styles.attachmentSection}>
                <label htmlFor="resume-upload" className={styles.attachmentLabel}>
                  <Paperclip size={18} />
                  <span>{attachedResume ? 'Change Resume' : 'Upload Resume (PDF, DOC, DOCX)'}</span>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className={styles.fileInput}
                    disabled={isSubmitting}
                  />
                </label>
                <p className={styles.attachmentHint}>
                  Required - PDF or DOC/DOCX format (Max 10MB)
                </p>
              </div>

              {/* Attached Resume Display */}
              {attachedResume && (
                <div className={styles.attachedFilesList}>
                  <div className={styles.attachedFile}>
                    <div className={styles.fileInfo}>
                      <Paperclip size={16} />
                      <span className={styles.fileName}>{attachedResume.name}</span>
                      <span className={styles.fileSize}>({formatFileSize(attachedResume.size)})</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveResume}
                      className={styles.removeFileBtn}
                      aria-label="Remove resume"
                      disabled={isSubmitting}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cover Letter Section */}
            <div className={styles.formSection}>
              <h4 className={styles.sectionHeading}>
                <Mail size={18} />
                Cover Letter
              </h4>
              
              <div className={styles.formGroup}>
                <label htmlFor="coverLetter" className={styles.label}>
                  Why are you interested in this position?
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={6}
                  placeholder="Tell us about your interest in this role and what makes you a great fit for ACD Corporation..."
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Additional Documents Section */}
            <div className={styles.formSection}>
              <h4 className={styles.sectionHeading}>
                <Paperclip size={18} />
                Additional Documents (Optional)
              </h4>
              
              <div className={styles.attachmentSection}>
                <label htmlFor="documents-upload" className={styles.attachmentLabel}>
                  <Paperclip size={18} />
                  <span>Upload Certificates, Licenses, or Portfolio</span>
                  <input
                    id="documents-upload"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleDocumentsChange}
                    className={styles.fileInput}
                    disabled={isSubmitting}
                  />
                </label>
                <p className={styles.attachmentHint}>
                  Optional - PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
                </p>
              </div>

              {/* Attached Documents Display */}
              {attachedDocuments.length > 0 && (
                <div className={styles.attachedFilesList}>
                  {attachedDocuments.map((file, index) => (
                    <div key={index} className={styles.attachedFile}>
                      <div className={styles.fileInfo}>
                        <Paperclip size={16} />
                        <span className={styles.fileName}>{file.name}</span>
                        <span className={styles.fileSize}>({formatFileSize(file.size)})</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveDocument(index)}
                        className={styles.removeFileBtn}
                        aria-label="Remove document"
                        disabled={isSubmitting}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Information Section */}
            <div className={styles.formSection}>
              <div className={styles.formGroup}>
                <label htmlFor="additionalInfo" className={styles.label}>
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={4}
                  placeholder="Any other information you'd like us to know (availability, salary expectations, etc.)"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* File Error Message */}
            {fileError && (
              <div className={styles.fileError}>
                {fileError}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </button>

            <p className={styles.disclaimer}>
              By submitting this application, you agree to ACD Corporation's privacy policy and consent to the processing of your personal data for recruitment purposes.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;