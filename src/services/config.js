import { recommended } from "../scripts/recommended.js";
const url = 'http://gr.vaxgame.top:3000';

export async function fetch_data(){
    const res = await fetch(`${url}/api/enallsong`);
    const data = await res.json();
    recommended(data ,url);
}

