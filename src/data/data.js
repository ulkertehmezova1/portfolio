export const data=[
    {
path:"https://imaginative-capybara-368049.netlify.app/",
img:"advice-generator.png",
name:"Advice Generator"

    }
    ,
    {
path:"https://dulcet-figolla-214440.netlify.app/",
img:"ecommerce-react-min.jpg",
name:"Shopping Card"
    },
    {
        path:"https://ulkerth.netlify.app/",
        img:"todo.png",
        name:"Todo App"
    },
    {
        path:"http://10.30.1.211:30000/thirdScreen",
        img:"logo.jpg",
        name:"E-təqib"
    }
]

export const news=[
    {
        img:"react-key.png",
        header:"Key nədir və onu element massivlərində istifadə etməyin faydası nədir?",
        paragraph:"Key elementlərin massivlərini yaradarkən daxil etməli olduğunuz xüsusi sətir atributudur. O reacta hansı elementlərin dəyişdirildiyini, əlavə olunduğunu və ya silindiyini müəyyən etməyə kömək edir.Key olaraq index istifadə etməməyə çalışmalıyıq.React-də açarlardan istifadə edərək elementlərin dəyişildiyini, əlavə edildiyini və ya silindiyini müəyyənləşdirmək mümkündür. Massivdə olan elementlərə sabit identiklik verə bilmək üçün hər elementə açar verilməlidir",
        imgModal:"lists.jpg"

    },
    {
        img:"virtual-dom.jpeg",
        header: "React-da Virtual DOM nədir? Real DOM vs Virtual DOM",
        paragraph:`Hər şeydən əvvəl DOM, Document Object Model deməkdir.
        Sadə sözlərlə DOM, tətbiqinizin UI -ni təmsil edir.
        Tətbiq interfeysinizin vəziyyətində hər dəfə bir dəyişiklik olduqda, DOM bu dəyişikliyi əks etdirmək üçün yenilənir.
        İndi tutma tez -tez DOM -u manipulyasiya edir, performansı yavaşlatır.
        DOM bir ağac məlumat quruluşu olaraq təmsil olunur. Bu səbəbdən DOM -dakı dəyişikliklər və yeniləmələr sürətlidir. Ancaq dəyişiklikdən sonra tətbiq interfeysini yeniləmək üçün yenilənmiş element və onun uşaqları yenidən işlənməlidir. UI-nin yenidən göstərilməsi və ya yenidən rənglənməsi onu yavaşlatan şeydir. Buna görə, nə qədər çox UI komponentiniz varsa, DOM yeniləmələri daha bahalı ola bilər,
         çünki hər DOM yeniləməsi üçün yenidən işlənməlidir.
         Virtual DOM anlayışının meydana gəldiyi və əsl DOM -dan daha yaxşı performans göstərdiyi yer budur. Virtual DOM yalnız DOM -un virtual bir nümayəndəsidir.
        Tətbiqimizin vəziyyəti dəyişdikcə, əsl DOM yerinə virtual DOM yenilənir.
       Yaxşı, soruşa bilərsiniz ki, virtual DOM əsl DOM ilə eyni şeyi etmir, bu ikiqat iş kimi səslənir? Bu, əsl DOM -u yeniləməkdən daha sürətli necə ola bilər?
       Cavab virtual DOM -un daha sürətli və səmərəli olmasıdır, bunun səbəbi budur.`,
       imgModal:"tree.png"
    },
    {
        img:"ui-ux.jpg",
        header:`UX/UI dizayn: Dizayn düşüncəsi(Design Thinking)`,
        paragraph:`İstifadəçi interfeysi(UI) dizayndakı interfeyslərlə, yəni xarici dizaynla məşğul olur. Xarici görünüşlə əlaqəli bütün dizaynlar UI dizaynı ilə bağlıdır. Bu nöqtədə onu UX ilə qarışdıra bilərsiniz, lakin incə bir fərq var. UX istifadəçi təcrübəsinə əsaslanan dizaynla istifadəçi qarşılıqlı əlaqəsi ilə məşğul olur. UI istifadəçi qarşılıqlı əlaqəsindən daha çox dizayn cəlbediciliyi ilə maraqlanır. Başqa sözlə, UX bizim qavrayışlarımızla, UI isə gözlərimizlə bağlıdır.
        UI dizaynı sayəsində bütün düymələr öz yerindədir. Axtarış motoru, əlaqə bölməsi, haqqımızda bölməsi və ya qalereya UI dizayn prosesində gözə ən cəlbedici şəkildə yerləşdirilir.
        Deyə bilərik ki, UX əslində UI dizaynını özündə ehtiva edir. Axtarış motorunun və ya haqqımızda bölməsinin harada daha yaxşı görünəcəyi ilə məşğul olarkən, UX dizaynı üçün vacib olan istifadəçi qarşılıqlı əlaqəsi və təcrübəsi də nəzərə alınır. Məsələn, həm qadınların, həm də kişilərin istifadə etdiyi bir çantanı nümunə götürsək, zəncirbəndin ölçüsü, forması və görünüşü UI ilə bağlıdır. Onun yerinin harada daha faydalı olacağı və hansı rəngə daha çox üstünlük veriləcəyi isə UX ilə bağlıdır.
        İstifadəçinin veb-saytda çətinlik çəkmədən naviqasiya etməsini, axtardığı məlumatlara asanlıqla daxil olmasını və bu rahatlıq sayəsində uzun müddət saytda qalmasını təmin etmək üçün istifadə edilən vizual dizaynların hamısı UI-dir. Formal yönümlü təkmilləşdirmələr, estetik detallar və görünüşlə bağlı hər şey UI dizayna aiddir. Səhifə strukturu, düymələr, şəkillər, xətlər, rənglər kimi qrafik elementlər UI dizaynının bir hissəsidir.`,
        imgModal:"dizayn.jpg"
    },
    {
        img:"prog.jpg",
        header:"Öyrənmə alışqanlığı və bunun proqramlaşdırmada rolu",
        paragraph:`
        Hansı mərhələdə və səviyyədə olmasından asılı olmayaraq bütün proqramçıların ortaq xüsusiyyətlərindən biri daimi öyrənmə alışqanlıqlarının olmasıdır.
Bu xüsusiyyət sadəcə proqramçılara xasdır demək əlbətdə ki düzgün olmaz. Lakin bəzi sahələr bu alışqanlığı olmayan birinin belə xarakterini dəyişməyə vadar edir. Bu olduğunuz sahənin fundamental xüsusiyyətlərindən qaynaqlanır.
Niyə proqramçılarda daimi öyrənmə alışqanlığı var?
Qısaca desək sektorda var ola bilmək üçün. Bir sektor düşünün ki inkişaf tempi və sürəti astronomikdir. Axşam yatıb səhər oyananda artıq sektor yenilənmiş və yeni texnologiyalar yayımlanmış olur. Sadəcə bu xüsusiyyət kifayət edir ki sektorda ən azından var ola bilmək üçün öyrənib tətbiq edəsiniz.
Yeni texnologiya öyrənmək digər sahələr üçün bəlkə də bonus kimi qəbul edilə bilər. Proqramlaşdırma sahəsində isə bu bonus yox məcburiyyətdir. Olduğunuz mövqeni qoruyub saxlamaq üçün, rəqabətə davam gətirəbilmək üçün.
Bu alışqanlığı olmayan ya da zamanla bu alışqanlığa sahib olmaq üçün özünü tərbiyələndirməyən şəxslər sektorda uzun ömürlü olmur. Bunu ətrafınızdakı proqramçılara və “işin başını buraxanlara” baxaraq rahatlıqla analiz edə bilərsiniz.`,
imgModal:"learn.jpeg"
    }
]

export const about=[
    {
        name:"Birthday : ",
        value:"13.02.2001"

    },
    {
        name:"Age : ",
        value:"21"

    },
    {
        name:"Address : ",
        value:"Baku"
    },
    {
        name:"Email : ",
        value:"ulkrthmzova@gmail.com"
    },
    {
        name:"Phone : ",
        value:"0554171057"
    },
   {
    name:"Study : ",
    value:"Baku State University"
   },
   {
    name:"Freelance : ",
    value:"Available"
   }
]

export const bottomnav=[
    {
        section:"Home",
        route:"/"
    },
    {
        section:"About",
        route:"/about",

    },

    {
        section:"Portfolio",
        route:"/portfolio"
    },
    {
        section:"News",
        route:"/news"
    },
    {
        section:"Contact",
        route:"/contact"
    }
]