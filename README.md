# Atelier Eureka : Architecture Web Distribuée

## Ports

| Service | Technologie | Port |
|---|---|---|
| Eureka Server | Spring Boot | 8761 |
| Candidat | Spring Boot | 8088 |
| Candidature | Spring Boot | 8089 |
| Job | Spring Boot | 8082 |
| Meeting | Node.js / Express | 8083 |
| Notification | Python / FastAPI | 8084 |

## Dashboard Eureka

![Dashboard Eureka](screenshots/eureka-dashboard.png)

## Tâche 1 : Meeting

![Meeting health](screenshots/meeting-health.png)

![Meeting info](screenshots/meeting-info.png)

## Tâche 2 : Notification

![Notification health](screenshots/notification-health.png)

![Notification info](screenshots/notification-info.png)

### Registre Eureka

![Registre Eureka](screenshots/eureka-notification-registry.png)

![statusPageUrl et healthCheckUrl](screenshots/eureka-notification-urls.png)
