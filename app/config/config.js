const server = {
  services_url: process.env.BASE_URL || "192.168.1.100",
  port: process.env.PORT || 8080
}
const services = {
  plex_url: process.env.PLEX_URL || `http://${server.services_url}:32400/web/index.html`,
  tv_url: process.env.TV_URL || `http://${server.services_url}:8081`,
  movie_url: process.env.MOVIE_URL || `http://${server.services_url}:5050`,
  monitor_url: process.env.MONITOR_URL || `http://${server.services_url}:8181`,
  dlr_url: process.env.DLR_URL || `http://${server.services_url}:8112`,
  demand_url: process.env.DEMAND_URL || `http://${server.services_url}:3000`
}


module.exports = Object.assign({}, {services, server})
