/*const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('306032cefd134ab38660d7db51dd18d1');
  // To query top headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  newsapi.v2.sources({
    q: 'mugabe',
    sources: 'https://iharare.com/',
  domains: 'iharare.com, iharare.com',
  from: '2022-07-01',
  to: '2022-07-08',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
  })
    .then(body => {
    try {
        return JSON.parse(body);
    } catch {
    throw (body);
    }
})
.then(console.log)
.catch(console.error);*/


var fs = require('fs')

let _RPG = JSON.parse(fs.readFileSync('./Library/database/inventori.json'))

        var addEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas += amount
                fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
            }
        }
        
        var sellEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas -= amount
                fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
            }
        }        
        
        var getEmas = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].emas
            }
        }

     var addDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond += amount
                fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
            }
        }
        
     var sellDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond -= amount
                fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
            }
        }
              
           var getDm = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].diamond
            }
        }
        
       var addBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi += amount
                fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       var sellBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi -= amount
                fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
            }
        }
                
       var getBesi = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].besi
            }
        }

       var addFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ikan += amount
                fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       var sellFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ikan -= amount
                fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
            }
        } 
               
       var getFish = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].ikan
            }
        }
                      
        var addInventori = (sender) => {
            var obj = {id: sender, emas: 0, diamond: 0, besi: 0, ikan: 0}
            _RPG.push(obj)
            fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_RPG))
        }
        
        var checkPetualangUser = (sender) => {
            let status = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        
module.exports = { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas , addFish, sellFish, getFish }
