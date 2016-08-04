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
            let items = [
            { id: 11, providerName: 'Mr. Nice', date: new Date(), from: "beijing", to: "shanghai", price: 32 },
            { id: 12, providerName: 'Narco', date: new Date(), from: "beijing", to: "shanghai", price: 32  },
            { id: 13, providerName: 'Bombasto', date: new Date(), from: "beijing", to: "shanghai", price: 32  },
            { id: 14, providerName: 'Celeritas', date: new Date(), from: "beijing", to: "shanghai", price: 32  },
            { id: 15, providerName: 'Magneta', date: new Date(), from: "beijing", to: "shanghai", price: 32  },
            { id: 16, providerName: 'RubberMan', date: new Date(), from: "beijing", to: "shanghai", price: 32  },
            { id: 17, providerName: 'Dynama', date: new Date(), from: "beijing", to: "shanghai", price: 32  },
            { id: 18, providerName: 'Dr IQ', date: new Date(), from: "beijing", to: "shanghai", price: 32  },
            { id: 19, providerName: 'Magma', date: new Date(), from: "beijing", to: "shanghai", price: 32  },
            { id: 20, providerName: 'Tornado', date: new Date(), from: "beijing", to: "shanghai", price: 32  }
            ];
            let searchResult = {
                items: items,
                size: items.length
            };
            return searchResult;
        })();
        return {cars, search};
    }
}
