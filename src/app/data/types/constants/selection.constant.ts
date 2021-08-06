import { WatchStatusType } from "../enums/watch-status.type";

export const SELECTION: object = {
    WatchStatus: [WatchStatusType.InCollection, WatchStatusType.Wishlist, WatchStatusType.Waitlist, WatchStatusType.Sold, WatchStatusType.Archived],
    WatchMaterial: ["Stainless Steel", "Bronze", "Aluminium", "Titanium", "Platinum", "Yellowgold", "Whitegold", "Rosegold", "Steel&Gold", "Ceramic", "PVD/DLC coating", "Carbon"],
    WatchFunctions: ["Date", "Weekday", "GMT", "24h hand", "Chronograph", "Tachymeter", "Flyback", "Moon phase", "Annual calendar", "Perpetual calendar"],
    WatchFeatures: ["ScrewDown Crown", "Semidirectional Bezel", "Bidirectional Bezel", "Right Handed / Crown left", "SuperLuminova", "Helium escape-valve", "Date Magnification", "Display back", "Small seconds", "Small rotor", "date 3 o'clock position", "date 6 o'clock position"],
    WatchMovement: ["Automatic / self-winding", "Mechanical / manual-winding", "Quartz", "Smartwatch"],
    WatchSet: ["Watch only", "Watch & Original Box", "Watch & Original Papers", "Watch with Original Box & Papers"],
    WatchCrystal: ["Sapphire crystal", "Mineral glass", "Plexi glass"],
    WatchDialColor: ["Black", "Blue", "Bordeaux", "White", "Red", "Grey"],
    WatchDialMaterial: ["Gold", "Silver", "Mother of pearl", "Champagne"],
    WatchDialType: ["California Dial", "Co-Signed", "Crosshair", "Gilt", "Meteorite", "Panda dial", "Sector", "Skeleton", "Tapisserie", "Waves"],
    WatchDialNumeral: ["No numerals", "Arabic numerals", "Roman numerals", "Eastern arabic numerals"],
    WatchCaliberFrequency: ["18.000 A/h", "21.600 A/h", "28.800 A/h", "36.000 A/h", "2,5 Hz", "3 Hz", "4 Hz", "5 Hz"],
    WatchCertification: ["COSC", "METAS", "Geneva seal"]
};
