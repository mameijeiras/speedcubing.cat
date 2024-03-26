import React from 'react';
import Head from 'next/head';
import DataTable from 'react-data-table-component';
import Layout from '../../components/layout/Layout';

function Members() {

    const columns = [
        {
            name: 'Nom',
        },
        {
            name: 'Perfil WCA',
        },
        {
            name: 'Antiguitat',
        },
        {
            name: 'Foto',
        },
    ]

    return (
        <Layout>
            <Head>
              <title>{`Membres - speedcubing.cat`}</title>
            </Head>
            <div className="bg-base-100">
            <DataTable
                columns={columns}
                data={[]}
            />
            </div>
        </Layout>
    )
}

export default Members;