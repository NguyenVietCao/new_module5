let courses = [ 
    { 
      id: 1, 
      title: "ReactJS Tutorial", 
      rating: 4.2, 
    }, 
    { 
      id: 2, 
      title: "Angular Tutorial", 
      rating: 2.5, 
    }, 
    { 
      id: 3, 
      title: "VueJS Tutorial", 
      rating: 3.8, 
    }, 
    { 
      id: 4, 
      title: "Java Tutorial", 
      rating: 4, 
    }, 
    { 
      id: 5, 
      title: "JavaScript Tutorial", 
      rating: 3.5, 
    }, 
];
  // xuat lon hon 4
  let arr = courses.filter((element) => (element.rating >=4));
  console.log(arr);
// nho hon 4 voi dinh dang 
  let arr1 = courses.filter((element) =>(element.rating <4)).map((el) =>(el.id +" - "+ el.title +" - "+el.rating))
console.log(arr1);

let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 
  

  let mergeArray = (a,b)=>[...a,...b];
console.log(mergeArray(addedCourses,courses));