console.log("supabase", supabase)

const supaClient = supabase.createClient("https://abfnyblchjdktybimhys.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZm55YmxjaGpka3R5YmltaHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NTgxNzUsImV4cCI6MjA1MjUzNDE3NX0.qZWGO-8kYvqL-LbNaPNOWWeU4at43K7MxuLsm_77yTI")


console.log("supaClient", supaClient)



const addData = async () => {
    try {

        const obj = {
            todo: "HELLO WORLD 11"
        }
        const { data, error } = await supaClient
            .from('todo')
            .insert(obj)
            .select()

        console.log("data", data)
        console.log("error", error)

    } catch (error) {
        console.log("error", error)
    }
}


const readData = async () => {


    // read specific col
    // let { data: todo, error } = await supaClient
    //     .from('todo')
    //     .select('todo,id')

    // console.log("todo", todo)
    // console.log("error", error)


    // Read all data
    // let { data: todo, error } = await supaClient
    // .from('todo')
    // .select('*')




    let { data: todo, error } = await supaClient
        .from('todo')
        .select('*')
        .eq("todo", "HELLO WORLD 11")

    console.log("todo", todo)

}



const updateRow = async () => {

    const { data, error } = await supaClient
        .from('todo')
        .update({ todo: 'HELLO WORLD UPDATE' })
        .eq('id', '3')
        .select()


    console.log(data, "data")

}

readData()