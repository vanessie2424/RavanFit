import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
      environment,
    models: {
        classes: Model,
    },

    seeds(server) {
        server.create("class", { id: "1", name: "Trampoline", price: 20000, description: "Trampolining is a low-impact exercise that works several joints without placing undue stress on them, thus reducing the likelihood of chronic injuries.", imageUrl: "images/tampoline.jpg", type: "simple" })
        server.create("class", { id: "2", name: "Pilates", price: 15000, description: "Pilates emphasizes proper postural alignment, core strength and muscle balance. It consists of low-impact flexibility and muscular strength and endurance movements.", imageUrl: "images/Pilates.jpg", type: "rugged" })
        server.create("class", { id: "3", name: "Tabata", price: 20000, description: "TABATA training is a form of high-intensity interval training (HIIT). It consists of eight rounds of ultra-high-intensity exercises in a specific 20-seconds-on, 10-seconds-off interval.", imageUrl: "images/Tabata.jpg", type: "luxury" })
        server.create("class", { id: "4", name: "Legs for Days", price: 18000, description: "In this workout routine, you have a day(s) of the week you dedicate a workout to your quads, hamstrings and calves.", imageUrl: "images/Legs.jpg", type: "simple" })
        server.create("class", { id: "5", name: "Taebo", price: 12000, description: "TAEBO is a total body fitness system that incorporates martial arts techniques such as kicks and punches at a rapid pace to develop body fitness.", imageUrl: "images/Taebo.jpg", type: "luxury" })
        server.create("class", { id: "6", name: "Strong by Zumba", price: 7000, description: "This is an aerobic fitness programme featuring movements inspired by various styles of Latin American dance and performed primarily to Latin American dance music such as soca, samba, salsa, merengue and mambo.", imageUrl: "images/Strong.jpg", type: "rugged" })
        server.create("class", { id: "7", name: "Spinning", price: 10000, description: "Spinning is a form of exercise with classes focusing on endurance, strength, intervals, high intensity (race days) and recovery", imageUrl: "images/Spinning.jpg", type: "simple" })
        server.create("class", { id: "8", name: "Afrobeat", price: 10000, description: "It consists of sessions where movement and music derive from the great artists and influencers of West Africa.", imageUrl: "images/Afrobeat.jpg", type: "simple" })
        server.create("class", { id: "9", name: "Yoga", price: 10000, description: "Yoga is a group of physical and mental exercise. A part of which includes breath control, simple meditation, and the adoption of specific bodily postures.", imageUrl: "images/Yoga.jpg", type: "simple" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/classes", (schema, request) => {
            return schema.classes.all()
        })
        
        this.get("/classes/:id", (schema, request) => {
            const id = request.params.id
            return schema.classes.find(id)
        })
    }
})

return server

}