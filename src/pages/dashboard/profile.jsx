import {
  Card, CardBody, Avatar, Typography, Switch, Tooltip, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea , Button
} from "@material-tailwind/react";
import { platformSettingsData } from "@/data";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";

export function Profile() {
  const [profile, setProfile] = useState({
    firstName: "Alec M. Thompson",
    mobile: "(44) 123 1234 123",
    email: "alecthompson@mail.com",
    location: "USA",   
  });

  const [open, setOpen] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);
  const handleOpen = () => setOpen(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSave = () => {
    setProfile(editProfile);  
    setOpen(false); 
  };
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setEditProfile({ ...editProfile, files });
  };
  return (
    <>
      <div className="relative mt-20  w-full overflow-hidden rounded-xl ">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/fena.jpg"
                alt="jon dues"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  jon dues
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  CEO / Co-Founder
                </Typography>
              </div>
            </div>            
          </div>
          <div className="grid grid-cols-1 gap-12 px-4 mb-12 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-blue-gray-500",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 flex flex-col gap-6">
              <h3 className="text-xl font-bold">Profile Information</h3>
              <div className="flex">
              <div>
              <div className="flex gap-3 mb-2">
                <div>First Name:</div>
                <span className="font-semibold text-black break-all">{profile.firstName}</span>
              </div>
              <div className="flex gap-3 mb-2">
                <div>Mobile:</div>
                    <span className="font-semibold text-black break-all">{profile.mobile}</span>
              </div>
              <div className="flex gap-3 mb-2">
                <div>Email:</div>
                    <span className="font-semibold text-black break-all">{profile.email}</span>
              </div>
              <div className="flex gap-3 mb-2">
                <div>Location:</div>
                    <span className="font-semibold text-black break-all">{profile.location}</span>
              </div>
              <div className="pt-4">Social Media</div>
              <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-4 md:grid-cols-8">
                {profile.files && profile.files.length > 0 ? (
                  profile.files.map((file, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {file.type.startsWith('image/') ? (
                        <img
                          src={URL.createObjectURL(file)}
                          loading="lazy"
                          alt={file.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                      ) : (
                        <span className="font-semibold text-black">{file.name}</span>
                      )}
                    </div>
                  ))
                ) : (
                  <span className="text-gray-500">No files uploaded.</span>
                )}
                </div>
              </div>
              <div className="w-8 h-8 cursor-pointer">
                <HiPencilAlt size={20} color="black" onClick={handleOpen} />
                </div>
              </div>
            </div>
            </div>
        </CardBody>
      </Card>
      <Dialog open={open} handler={() => setOpen(!open)}>
        <DialogHeader>Edit Profile Information</DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <Input
              type="text"
              label="First Name"
              name="firstName"
              value={editProfile.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Mobile"
              name="mobile"
              value={editProfile.mobile}
              onChange={handleChange}
            />
            <Input
              type="email"
              label="Email"
              name="email"
              value={editProfile.email}
              onChange={handleChange}
            />
            <Textarea
              label="Location"
              name="location"
              value={editProfile.location}
              onChange={handleChange}
            />
            <div className="grid grid-cols-12 ">
              <div className="col-span-12">                             
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Upload Social Icons
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" className="mr-3 bg-red-50" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="gradient" color="blue" onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Profile;
