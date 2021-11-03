import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1634649807134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Compliments",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"user_sender",
                        type:"uuid"
                    },
                    {
                        name:"user_reiver",
                        type:"uuid"
                    },
                    {
                        name:"tag_id",
                        type:"uuid"
                    },
                    {
                        name:"message",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FkUserSenderCompliments",
                        referencedTableName:"User",
                        referencedColumnNames:["id"],
                        columnNames:["user_sender"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                    {
                        name: "FkUserReceiverCompliments",
                        referencedTableName:"User",
                        referencedColumnNames:["id"],
                        columnNames:["user_Receiver"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                    {
                        name: "FkUserTagCompliments",
                        referencedTableName:"tags",
                        referencedColumnNames:["id"],
                        columnNames:["tag_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    }

                ]
            })
        )

            await queryRunner.createForeignKey

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Compliments")
    }

}
