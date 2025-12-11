export default function reducer(categories,action){
switch(action.type){
    case "addTask":{
        const {category,...task}=action.payload;
        return {
            ...categories, 
            items: {
              ...categories.items,
              [category]: [...categories.items[category], task],
              all: [...categories.items.all, task]
           }
        }
    }
    case "checkTask":{
        const id=action.id;
        return{
            ...categories,items:{
                all:categories.items.all.map((categor)=>categor.id===id?{...categor,done:!categor.done}:categor),
                work:categories.items.work.map((categor)=>categor.id===id?{...categor,done:!categor.done}:categor),
                school:categories.items.school.map((categor)=>categor.id===id?{...categor,done:!categor.done}:categor),
                social:categories.items.social.map((categor)=>categor.id===id?{...categor,done:!categor.done}:categor)
            }
        }
    }
    case "deleteTask":{
        const id=action.id;
        return {
         ...categories,
         items:{
            all:categories.items.all.filter((categor)=>categor.id!==id),
            work:categories.items.work.filter((categor)=>categor.id!==id),
            school:categories.items.school.filter((categor)=>categor.id!==id),
            social:categories.items.social.filter((categor)=>categor.id!==id),
        }};
    }
    case "editTask":{
        const id=action.editedId;
        const editedText=action.editedText;
        return {
            ...categories,
            items:{
                all:categories.items.all.map((categor)=>categor.id===id?{...categor,text:editedText}:categor),
                work:categories.items.work.map((categor)=>categor.id===id?{...categor,text:editedText}:categor),
                school:categories.items.school.map((categor)=>categor.id===id?{...categor,text:editedText}:categor),
                social:categories.items.social.map((categor)=>categor.id===id?{...categor,text:editedText}:categor),

            }
        }
    }
}
}
