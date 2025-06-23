import React from 'react'

 const citiesData = [
    {
      name: "Токио",
      description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl: "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: 
        [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей."
        ]
    },

    {
      name: "Киото",
      description: "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
      imageUrl: "https://images.openai.com/thumbnails/21d3758e4c6a0dfcd51713e70a30c895.jpeg",
      facts: 
        [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет."
        ]
    },

    {
      name: "Осака",
      description: "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
      imageUrl: "https://www.jal.co.jp/ru/ru/guide-to-japan/destinations/articles/hokkaido/best-parks-and-nature-attractions/_jcr_content/root/responsivegrid/sectioncontainer/image_1041888335.coreimg.jpeg/1636979893044.jpeg",
      facts: 
        [
        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
        "Город является кулинарной столицей Японии."
        ]
    },

    {
      name: "Хоккайдо",
      description: "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
      imageUrl: "https://100mt.ru/upload/medialibrary/e45/e4576c876eeb1c38cd07f8b149e447a3.jpg",
      facts: 
        [
        "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
        "Летом остров привлекает туристов своими цветущими лавандовыми полями."
        ]
    },

    {
      name: "Нагоя",
      description: "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
      imageUrl: "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
      facts: 
        [
        "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
        "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше."
        ]
    }
  ];

const CitySelector = ({ onCitySelect }) => {
    const handleChange = (e) => {
      const selectedCityName = e.target.value;
      const city = citiesData.find(c => c.name === selectedCityName);
      onCitySelect(city);
    }
  

  return (
    <div>
      <select onChange={handleChange} defaultValue="">
          <option value="" disabled>Выберите город</option>
          {citiesData.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
      </select>
    </div>
  )
}


export default CitySelector