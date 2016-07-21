export class InMemoryDataService {
    createDb() {
        let cars = (() => {
            let results = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
            ];
            return results;
        })(),
        search = (() => {
            let results = [];
            for (let i = 0; i < 100; i++) {
                results.push({
                    id: i,
                    providerName: 'provider' + i,
                    date: new Date(),
                    from: 'from' + i,
                    to: 'to' + i,
                    price: i
                });
            }
            return results;
        })();
        return {cars, search};
    }
}
