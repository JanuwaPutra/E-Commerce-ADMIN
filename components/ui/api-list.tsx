"use client"

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
    namaIndkator : string;
    idIndikator : string;
}

export const ApiList: React.FC <ApiListProps> = ({
    namaIndkator,
    idIndikator
}) => {

    const params = useParams();
    const origin = useOrigin();

const baseURL = `${origin}/api/${params.storeId}`

    return (
        <>
        <ApiAlert
        title="GET"
        variant="public"
        description={`${baseURL}/${namaIndkator}`}
        />

        <ApiAlert
        title="GET"
        variant="public"
        description={`${baseURL}/${namaIndkator}/{${idIndikator}}`}
        />

        <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseURL}/${namaIndkator}`}
        />

        <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseURL}/${namaIndkator}/{${idIndikator}}`}
        />

<ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseURL}/${namaIndkator}/{${idIndikator}}`}
        />
        </>
    )
}