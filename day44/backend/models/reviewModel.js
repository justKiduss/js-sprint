export function reviewModel(){
    const byIds={};
    let allIds=[];

    return{
        getAll:()=>allIds.map(id=>byIds[id]),

        getById:(id)=>byIds[id],

        create:(id,review)=>{
            if (!allIds.includes(id)) return null
            byIds[id]={...review,id}
            // byIds[id]...review,id;
            allIds.push(id);
            return byIds[id];
        },
        update:(id,data)=>{
            if(!byIds[id]){
                return null;
            }
            byIds[id]={...byIds[id],...data};
            return byIds[id];
        },
        delete:(id)=>{
            if(!byIds[id]){
                return null;
            }
            delete byIds[id];
            allIds=allIds.filter(ids=>ids!==id);
            return true;
        }
    }
    

}

const model=reviewModel();

export default model;

