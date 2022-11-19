import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function SessionTime(){
    const now = new Date().getTime();
    const newDate = now + 60*30*1000;
    return new Date(newDate);
}

export function getSession(){
    console.log("cookie: "+cookies.get('_s'));
    return cookies.get('_s')!==null? cookies.get('_s'):false;
}