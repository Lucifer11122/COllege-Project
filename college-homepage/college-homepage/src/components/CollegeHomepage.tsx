import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip.tsx";
import {
  LogIn,
  GraduationCap,
  Users,
  Mail,
  AlertTriangle,
  Menu,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { History } from "./ui/History.tsx";
import { PD } from "./ui/PD.tsx";
import {Login} from "./ui/Login.tsx";
import Grievances from "./ui/Grievances.tsx";
import {Undergraduate} from "./ui/Undergraduate.tsx";
export default function CollegeHomepage() {
  const [isHovered, setIsHovered] = useState(false);
  const [covidUpdate, setCovidUpdate] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showGrievances, setShowGrievances] = useState(false);
  const [showUndergraduate, setShowUndergraduate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCovidUpdate = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(
          () => resolve("Campus is open with safety measures in place."),
          1000
        )
      );
      setCovidUpdate(response as string);
    };

    fetchCovidUpdate();
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="relative min-h-screen bg-white overflow-hidden">
        {/* Header background circles */}
        <div className="absolute top-0 left-0 w-full">
          <div className="relative h-24 flex justify-between items-center px-4">
            {/* Left circles */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-20 h-20 bg-orange-500 rounded-full opacity-70"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="w-20 h-20 bg-orange-400 rounded-full opacity-70 -mt-10 ml-10 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white p-0"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="w-16 h-16 bg-orange-300 rounded-full opacity-70 absolute -bottom-16 left-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
            {/* Right circles */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-20 h-20 bg-orange-500 rounded-full opacity-70"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="w-20 h-20 bg-orange-400 rounded-full opacity-70 -mt-10 mr-10 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white p-0"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="w-16 h-16 bg-orange-300 rounded-full opacity-70 absolute -bottom-16 right-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-between min-h-screen">
          {/* Header */}
          <header className="w-full text-center pt-8">
            <div className="flex justify-center items-center space-x-4">
              <div className="h-px bg-orange-500 w-20" />
              <img
                src="public/placeholder.svg"
                alt="College Logo"
                className="w-15 h-15"
              />
              <div className="h-px bg-orange-500 w-20" />
            </div>
            <motion.h1
              className="text-4xl font-bold mt-4 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Banwarilal Bhalotia College
            </motion.h1>
            <p className="text-gray-600 mt-2">Established in 1944</p>
          </header>

          {/* COVID-19 Banner */}
          <motion.div
            className="w-full bg-orange-500 text-white py-2 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Campus COVID19 Information: {covidUpdate}
          </motion.div>

          {/* Main Image and Text Overlay */}
          <div className="relative w-full flex-grow mt-8">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="College Building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <motion.h2
                className="text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                EMPOWERING MINDS
              </motion.h2>
              <motion.h3
                className="text-4xl font-semibold text-orange-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                BB COLLEGE
              </motion.h3>
            </div>
          </div>

          {/* Navigation and Buttons */}
          <nav className="w-full bg-white py-4 px-8 flex justify-between items-center">
            <div className="flex space-x-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-orange-100 hover:bg-orange-200"
                      onClick={() => setShowLogin(true)}
                    >
                      <LogIn className="h-6 w-6 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Login</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div></div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-orange-100 hover:bg-orange-200"
                      onClick={() => setShowUndergraduate(true)}
                    >
                      <GraduationCap className="h-6 w-6 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Undergraduate</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-orange-100 hover:bg-orange-200"
                      onClick={() => setShowUndergraduate(false)}
                    >
                      <Users className="h-6 w-6 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Graduate</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-orange-100 hover:bg-orange-200"
                      onClick={() => handleNavigation("/contact")}
                    >
                      <Mail className="h-6 w-6 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Contact</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center cursor-pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => setShowGrievances(true)}
              >
                <motion.div
                  className="w-12 h-0.5 bg-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? 48 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <AlertTriangle className="h-6 w-6 text-orange-500 ml-2" />
                <span className="ml-2 text-orange-500">Grievances</span>
              </motion.div>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => handleNavigation("/apply")}
              >
                APPLY NOW
              </Button>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <History />
        <div>
          {showLogin && <Login />}
          {showGrievances && <Grievances />}
          {showUndergraduate&& <Undergraduate/>}
         
          <PD />
        </div>
      </div>
    </>
  );
}
