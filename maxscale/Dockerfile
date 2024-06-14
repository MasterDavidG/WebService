# Използваме официалния образ на MaxScale
FROM mariadb/maxscale:latest

# Копираме конфигурационния файл maxscale.cnf в контейнера
COPY maxscale.cnf /etc/maxscale.cnf

# Копираме rsyslog.conf в контейнера
COPY rsyslog.conf /etc/rsyslog.conf

# Изпълняваме командата за стартиране на MaxScale
CMD ["maxscale", "-f", "/etc/maxscale.cnf"]
