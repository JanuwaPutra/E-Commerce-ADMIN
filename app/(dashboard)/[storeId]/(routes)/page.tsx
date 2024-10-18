interface DasboardPageProps {
    params: {storeId: string}
}

import db from "@/lib/db";

const DashboardPage= async({params} : DasboardPageProps)=>{
    const store = await db.store.findFirst({
        where:{
            id:params.storeId
        }
    })

    return(
        <div className="ml-5 mt-5">
            Active Store : {store?.name}

        </div>
    );
}
export default DashboardPage