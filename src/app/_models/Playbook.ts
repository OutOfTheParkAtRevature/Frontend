

export class Playbook
{
    //playbookId: number;
    id: number;
    teamId: number;
    name: string;

    constructor(id: number)
    {
        this.teamId = id;
    }
}