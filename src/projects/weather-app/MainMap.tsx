'use client';
import { Button, Text, Flex, TextField} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SearchIcon from './lupa.png';
import { Navigation} from "../../Navigation";

const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function ChangeMapZoom({  center  }: {center: [number, number]}) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, 13);
    });
    return null
}

export default function MainMap() {
    const [position, setPosition] = useState<[number, number]>([50.4501, 30.5234]);
    const [weather, setWeather] = useState<string>('Загрузка погоды..');
    const [city, setCity] = useState<string>('');

    useEffect(() => {
        const [lat, lon] = position;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=eng&appid=e33be5d4610ce1d004d303c7be757c47`
        )

            .then(res => res.json())
            .then(data => {
                if (data.weather && data.main) {
                    setWeather(`${data.weather[0].description}, ${data.main.temp}°C`);
                } else {
                    setWeather('Error 404');
                }
            })
            .catch(() => setWeather('Network Error'));
    }, [position]);

    const SearchCity = async () => {
        if (!city) return;
            try{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=eng&appid=e33be5d4610ce1d004d303c7be757c47`;
                const response = await fetch(url);
                const data = await response.json();

                if (data.coord) {
                    setPosition([data.coord.lat, data.coord.lon]);
                } else {
                    alert('Sity could not be found.');
                }
            } catch {
                alert('Network error');
            }
    };

        return (
            <>
                <Flex>
            <Navigation ></Navigation>
                </Flex>
                <Flex gap="1" justify="center" style={{ margin: "20px" }}  >
                    <TextField.Root size="3" variant="classic" placeholder="Search the city" value={city} onChange={(e) => setCity(e.target.value)} >
                    </TextField.Root>

                    <Button  size="3" onClick={SearchCity}><img alt="Search" src={SearchIcon} style={{width: `10px`, height: `10px` }}/>Search</Button>
                    </Flex>


                {city ? (
                    <MapContainer center={position} zoom={11} scrollWheelZoom style={{ height: '100vh', width: '100%' }}>
                        <ChangeMapZoom center={position} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={customIcon}>
                            <Popup>Weather: {weather}</Popup>
                        </Marker>
                    </MapContainer>
                ) : (
                    <Flex justify="center" align="center" style={{ margin: "200px" }} >
                    <Text size="5" weight="medium">Enter a city to display the map</Text>
                    </Flex>
                )}
            </>
        );}