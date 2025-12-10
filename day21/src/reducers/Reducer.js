export function reducer(categories,action){
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
}
}
