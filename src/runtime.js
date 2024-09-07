((globalThis)=>{
    const core = Deno.core;

    function argsToMessage(...args){
        return args.map((arg)=>JSON.stringify(arg)).join(" ");
    }

    const sarcasticPhrases = [
        "Oh brilliant idea",
        "Oh , how original..",
        "wow, never heard before",
        "great job you found a bug",
        "congrats, you broke the code",
        "keep it up, genius",
        "Sarcasm level : Expert...",
        "You should be a comedian..",
        "You are really great"
    ]

    function getCurrentTime(){
        const now = new Date();
        const hours = now.getHours().toString().padStart(2,"0")
        const minutes = now.getMinutes().toString().padStart(2,"0")
        const seconds = now.getSeconds().toString().padStart(2,"0")
        return `${hours}: ${minutes}: ${seconds}`
    }

    globalThis.console = {
        log: (...args) => {
            core.print(`[out]: ${argsToMessage(...args)}\n`,false);
        },
        sarcasm: (...args) => {
            const time = getCurrentTime();
            const sarcasticMessage = sarcasticPhrases[Math.floor(Math.random() * sarcasticPhrases.length)]
            const message = argsToMessage(...args) + `\n\x1b[1ms${sarcasticMessage}\x1b[0m`
            const logMessage = `\x1b[1;35m[${time}]] [message]:\x1b[0m ${message}]`;
            core.print(`${logMessage}\n`,true);
        },
    };
})(globalThis);