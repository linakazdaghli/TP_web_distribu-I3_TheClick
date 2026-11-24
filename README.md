# Atelier Eureka : Architecture Web Distribuée

## Équipe

Molka Kammoun 
Esra Masmoudi
Mohamed Khouni
Nermine Karoui
Samar Masmoudi
Lina Kazdaghli

## Ports

| Service | Technologie | Port(s) | Nom dans Eureka |
|---|---|---|---|
| Eureka Server | Spring Boot | 8761 | - |
| Candidat | Spring Boot | 8088 | CANDIDAT |
| Candidature | Spring Boot | 8089 | CANDIDATURE |
| Job | Spring Boot | 8082 | JOB |
| Meeting | Node.js / Express | 8083, 8093 (2 instances) | MEETING |
| Notification | Python / FastAPI | 8084 | NOTIFICATION |

## Dashboard Eureka

![Dashboard Eureka](screenshots/eureka-dashboard.png)

## Tâche 1 : Meeting

Le port est lu depuis la variable d'environnement `PORT` (8083 par défaut).

```powershell
# Instance 1
node src/server.js

# Instance 2
$env:PORT=8093; node src/server.js
```

![Meeting health](screenshots/meeting-health.png.png)

![Meeting info](screenshots/meeting-info.png.png)

### Plusieurs instances de Meeting

Les deux instances (`meeting:8083` et `meeting:8093`) sont enregistrées sous le même nom MEETING : le dashboard affiche `UP (2)`.

![Instances Meeting dans Eureka](screenshots/eureka-meeting-instances.png.png)

![Meeting health 8093](screenshots/meeting-health-8093.png.png)

## Tâche 2 : Notification

![Notification health](screenshots/notification-health.png.png)

![Notification info](screenshots/notification-info.png.png)

### Registre Eureka

![Registre Eureka](screenshots/eureka-notification-registry.png.png)

![statusPageUrl et healthCheckUrl](screenshots/eureka-notification-urls.png.png)
