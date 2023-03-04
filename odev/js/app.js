const menu = [
  {
    id: 1,
    title: "Tavce Gravce",
    category: "Makedonya",
    price: 10.99,
    img:
      "https://i.pinimg.com/736x/09/ac/13/09ac13ea3a713213375cd6aa3f005182.jpg",
    desc: `Makedonya’daki en geleneksel yemeklerden biridir.<br>Makedonlar bu yemeği sosis veya kaburga
     ve taze kırmızı biber ile birleştirmeyi severler.Genellikle ekmekle yenir.`,
  },
  {
    id: 2,
    title: "Zelnik – Filo",
    category: "Makedonya",
    price: 7.99,
    img:
      "https://www.afiyetola.com/wp-content/uploads/2021/07/Zelnik-%E2%80%93-Filo-Phyllo-icli-Turta.jpg",
    desc: `Dışı yarı gevrek, içi yumuşak ve yumuşak, doğranmış pırasa ile doldurulmuş bir turta.
   <br> Genellikle ekşi krema ile servis edilir. `,
  },
  {
    id: 3,
    title: "Cevapi",
    category: "Makedonya",
    price: 8.99,
    img:
      "https://blog.biletbayi.com/wp-content/uploads/2019/02/Cevapi-1068x801.jpg",
    desc: `Et kültürünün bu şehirde çok geniş olduğunu belirtelim. <br>
    Özellikle şehirde hazırlanan köfteler dillere destan ve şehre gelenlerin yemeden ayrılmadığı bir lezzet.`,
  },
  {
    id: 4,
    title: "Flija",
    category: "Arnavutluk",
    price: 5.99,
    img:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ushqim_Tradicional_Flija.JPG/1200px-Ushqim_Tradicional_Flija.JPG",
    desc: `Flija; basit malzemeler kullanılarak hazırlanan, fırında ağır ağır pişirilen ve kremayla servis edilen geleneksel bir Arnavut yemeğidir.<br>
     Genelde salamura sebzelerle, balla, yoğurtla veya<br> meyve reçeliyle beraber tüketilen flia; düğünlerde, doğum günlerinde ve çeşitli kutlamalarda tercih edilmektedir.`,
  },
  {
    id: 5,
    title: "Bakllava",
    category: "Arnavutluk",
    price: 12.99,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Baklava_-_Turkish_special%2C_80-ply.JPEG/1200px-Baklava_-_Turkish_special%2C_80-ply.JPEG",
    desc: `Osmanlı'nın Balkanlar'daki hakimiyeti sürecinde Türk mutfağından Arnavut mutfağına geçmiş olan bakllava; <br>
    ülkede özellikle dini bayramlarda yapılan, şerbetli bir tatlıdır.`,
  },
  {
    id: 6,
    title: "Tavë Kosi",
    category: "Arnavutluk",
    price: 9.99,
    img:
      "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/0714-Teaser-recipe-tave-kosi-%28baked-lamb-and-rice-with-yoghurt%29.jpg?itok=ZnKYE9t-",
    desc: `Tavë Kosi; Arnavutluk'ta en çok sevilen ve millî yemek olarak görülen yiyeceklerden biridir.<br>
    Kuzu etinin pirinç pilavı ve yoğurtlu sosla ikram edildiği bu yemek,<br>
     Türk ve Yunan mutfaklarına da girmiş; halk tarafından benimsenmiştir.`,
  },
  {
    id: 7,
    title: "Ribitsa",
    category: "Bosna Hersek",
    price: 15.99,
    img:
      "https://img.piri.net/mnresize/900/-/resim/imagecrop/2022/05/12/02/18/resized_5d9a6-b0de396ct25_nefisbosnakmantisitari841.webp",
    desc: `Ribitsa, bir çeşit mantıdır. Hamur elde açılır ve kare şeklinde mantılar hazırlanır. İç malzemesi kıyma, soğan, karabiber, tuzdur. Hazırlanan mantılar fırında börek gibi pişirilir.<br>
    Üzerine yoğurt konulup kısa bir süre fırında bekletilir.<br>
     Üzerine servis edilmeden önceden tereyağ ile pişirilerek hazırlanmış salça veya pul biber sosu dökülür. `,
  },
  {
    id: 8,
    title: "Kaçamak",
    category: "Bosna Hersek",
    price: 12.99,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%D0%9A%D0%B0%D1%87%D0%B0%D0%BC%D0%B0%D0%BA_%D1%81%D0%BE_%D0%BA%D0%B8%D1%81%D0%B5%D0%BB%D0%BE_%D0%BC%D0%BB%D0%B5%D0%BA%D0%BE_%D0%B8_%D0%BF%D0%B0%D1%80%D1%87%D0%B5_%D1%81%D0%B8%D1%80%D0%B5%D1%9A%D0%B5.jpg/640px-%D0%9A%D0%B0%D1%87%D0%B0%D0%BC%D0%B0%D0%BA_%D1%81%D0%BE_%D0%BA%D0%B8%D1%81%D0%B5%D0%BB%D0%BE_%D0%BC%D0%BB%D0%B5%D0%BA%D0%BE_%D0%B8_%D0%BF%D0%B0%D1%80%D1%87%D0%B5_%D1%81%D0%B8%D1%80%D0%B5%D1%9A%D0%B5.jpg",
    desc: `Kaçamak ya da mamaliga, mısır unundan yapılan bir yemektir.<br>
     Kaçamak, Balkan ve Kafkasya göçmenlerinin sıklıkla yaptığı yemeklerden bir tanesidir.`,
  },
  {
    id: 9,
    title: "Kuru Et",
    category: "Bosna Hersek",
    price: 3.99,
    img:
      "https://blog.biletbayi.com/wp-content/uploads/2019/06/Kurutulmus-et.jpg",
    desc: `Pastırmaya benzer kuru et, Balkan topraklarının en meşhur yiyecekleri arasında bulunuyor.`,
  },
];




// kategorileri menu içerisinden alma

let kategoriler = menu.map(kategori => kategori.category)

// set ile aynı olanları çıkarma ve yeni listeye ekleme

let kategoriList = [...new Set(kategoriler)]

kategoriList.unshift("All")   //All listenin başına unshift ile eklendi.

// filter buttonları ekleme
let filterDOM = document.querySelector(".btn-container")  //butonların ekleneceği yer seçildi
kategoriList.forEach(buttons => {
  let button = document.createElement("button")
  button.innerHTML = buttons
  button.classList.add("btn-item","btn", "btn-outline-dark")
  button.addEventListener("click", buttonClick)
  button.setAttribute("id", buttons)
  filterDOM.append(button)
})

// menu elemanlarının ekleneceği yeri seçme
let menuDOM = document.querySelector(".section-center", ".row")

//menu elemanlarının eklenmesi
function addItem(menu) {
  menuDOM.innerHTML = ""; //her kategoriye basıldığında ana ekranın temizlenmesi


  for(i=0; i<menu.length; i++) {   // For döngüsü ile "menu" içerisindeki tüm yemekleri aşağıdaki standart'a göre oluşturdum.
  
   //tek bir yemek için yapının oluşturulması - START
  let menuItems = document.createElement("div")
  menuItems.classList.add("menu-items", "col-lg-6", "col-sm-12")

  
  let image = document.createElement("img")
  image.classList.add("photo")
  image.src = menu[i].img
  image.alt = menu[i].title

  menuDOM.append(menuItems)
  menuItems.append(image)
  
 const menuInfo = document.createElement("div")
 menuInfo.classList.add("menu-info")
 
 let menuTitle = document.createElement("div")
 menuTitle.classList.add("menu-title")

 menuInfo.append(menuTitle)
 
 let title = document.createElement("h4")
 title.innerHTML= menu[i].title

 let price = document.createElement("h4")
 price.classList.add("price")
 price.innerHTML= "€ "+menu[i].price
 
 

 let text = document.createElement("div")
 text.classList.add("menu-text")
 text.innerHTML = menu[i].desc
 menuTitle.append(title)
 menuTitle.append(price)
 
 menuInfo.append(text)
 
 
 menuItems.append(menuInfo)
// tek bir yemek için yapının oluşturulması - END
}
}


// butonlara tıklandığıda kategoriyi getirme işlemi
function buttonClick(){
  const result = (this.getAttribute("id") == "All") ? menu : menu.filter((item) => {
    return item.category == this.getAttribute("id");
  });
  addItem(result);
};

// sayfa açıldığında tüm yemeklerin ana ekranda görünmesi
window.addEventListener('DOMContentLoaded', (event) => {
  addItem(menu)
});

