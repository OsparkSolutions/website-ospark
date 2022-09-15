
export const runAsync = (runnable: ()=> Promise<void>) =>{
    runnable();
}